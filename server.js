const express = require('express');
const sessions = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const path = require('path');
const app = express();
const mysql = require("mysql")
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));


const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    resave: false,
    saveUninitialized:true,
    cookie: { maxAge: oneDay }
}));

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
})


var session

app.get('/', async (req,res) => {
    session = req.session;

    try{
    const address = req.query.address;
    const datesSejour = req.query.datesSejour;
    let dateDebut, dateFin;

    if (datesSejour) {
        const dateParts = datesSejour.split(" ");
        dateDebut = dateParts[0];
        dateFin = dateParts[1];
    }

    const prix = req.query.price
    const nbrChambre = req.query.nbrChambre;
    const nbrBed = req.query.nbrBed;
    const distance = req.query.distance;
    const biens = await fetchBiens(address,dateDebut,dateFin,prix,nbrChambre,nbrBed,distance); 
    res.render('index', {data : biens, session: session});

    }catch (error){
        console.error("Erreur lors de la récupération des biens:", error);
        res.status(500).send("Erreur lors de la récupération des biens");
    }
});

const fetchBiens = (address,dateDebut,dateFin,prix,nbrChambre,nbrBed,distance) => {
    return new Promise((resolve, reject) => {
        let sql = `
        SELECT *,
        AVG(locations.note) as moyenneNote,
        COUNT(locations.note) as nbrNotes
    FROM biens
    NATURAL JOIN locations
    WHERE 1`
        const params = [];

        if (address){
            sql += " AND commune = ? "
            params.push(address);
        }

        if (dateDebut && dateFin) {
            sql += " AND NOT EXISTS (SELECT 1 FROM locations WHERE biens.idBien = locations.idBien AND ? <= dateFin AND ? >= dateDebut)";
            params.push(dateFin, dateDebut);
        }
        

        if (prix != "0"){
            sql += " AND prix <= ?";
            params.push(prix);
        }

        if (nbrChambre){
            sql += " AND nbChambres >= ?"
            params.push(nbrChambre);
        }

        if (nbrBed){
            sql += " AND nbCouchages >= ?"
            params.push(nbrBed);
        }

        if(distance){
            sql += " AND distance <= ?"
            params.push(distance);
        }


         con.query(sql + " group by biens.idBien", params, function(err, result) {
             if (err) {
                  reject(err);
             } else {
                  resolve(result);
             }
        });
    })
}


app.get("/bien/:idBien", async (req,res) => {
    session = req.session;  
    try{
        const dataBien = await fetchDatabyIdBien(req.params.idBien);
        const reservedDates = await fetchReservedDatesForApartment(req.params.idBien);
        res.render('bien', { data: dataBien, reservedDates: reservedDates, session: session });


    }catch (error){
        console.error("Erreur lors de la récupération des données du biens:", error);
        res.status(500).send("Erreur lors de la récupération des données du biens");
    }
    
})

const fetchDatabyIdBien = (idBien) => {
    return new Promise((resolve, reject) =>{
        let sql = "SELECT *, AVG(locations.note) as moyenneNote, COUNT(locations.note) as nbrNotes, COUNT(locations.avis) as nbrAvis FROM biens NATURAL JOIN locations WHERE idBien = ?"
        const params = [];
        params.push(idBien);
        con.query(sql, [params], function(err,result){
            if (err){
                reject (err);
            }else{
                resolve(result);
            }
        });
    });
}

app.post("/reservation", async(req,res) =>{
    session = req.session;
        const datesSejour = req.body.datesSejour;
        const dateDebut = datesSejour.split(" ")[0];
        const dateFin = datesSejour.split(" ")[1];

        const userMail = req.body.email; 
        const checkEmail = 'SELECT COUNT(*) AS userCount FROM utilisateurs WHERE mail = ?';


        con.query(checkEmail, [userMail], function(err,result){
            if (err){
                throw err;
            }else{
                const userCount = result[0].userCount; 
                
                if (userCount === 0){
                    return res.status(400).render("failed");
                }

            }
        })

        const locationData = {
            idBien: req.body.idBien,
            mailLoueur: userMail,
            dateDebut: dateDebut,
            dateFin: dateFin,
            avis: null,
            note: null,
          };
          
          let sql = "INSERT INTO locations SET ?";

        con.query(sql, locationData, function(err,result){
            if (err){
                result.status(400).render("failed");
            } 
            else{
                result.status(200).render("success");
            }
          });
})


app.listen(port);
console.log(`Listening on port ${port}`);


const fetchReservedDatesForApartment = (idBien) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT dateDebut, dateFin FROM locations WHERE idBien = ?";
        con.query(sql, [idBien], (err, results) => {
            if (err) reject(err);
            const reservedDates = results;
            resolve(reservedDates);
            }
        );
    });
};




app.post("/login", async(req,res) =>{
    
    const userQuery = "SELECT mail as identifiant, password as pwd from utilisateurs where mail = ? AND password = ?"
    params = [];

    const identifiant = req.body.identifiant;
    const pwd = req.body.password;

    params.push(identifiant);
    params.push(pwd);

    con.query(userQuery, params, (err,result) =>{
        if (err) throw err;

        const user = result[0];

            if (!user){
                res.render("failed");
                return;
            }

            session = req.session;
            session.userid = req.body.identifiant;
            console.log(req.session.userid);
            res.redirect("/");
            })
});


app.get("/logout",async (req,res) =>{
    req.session.destroy();
    res.redirect("/");
})

app.post("/register", async (req,res) => {

    let registerQuery = "INSERT INTO utilisateurs SET ?"

    utilisateur = {
    mail: req.body.identifiantRegister,
    prenom: null,
    nom : null,
    telephone: null,
    password: req.body.passwordRegister
    }

    con.query(registerQuery, utilisateur, (err,result) => {
        if (err) throw err;
        else{
            result.status(200).render("success");
        }

    })

})