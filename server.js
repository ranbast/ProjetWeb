const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "e20230012081"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
})


app.get('/', async (req,res) => {
    try{
    const address = req.query.address;
    const dateSejour = req.query.dateSejour;
    const prix = req.query.price
    const nbrChambre = req.query.nbrChambre;
    const nbrBed = req.query.nbrBed;
    const distance = req.query.distance;

    const biens = await fetchBiens(address,dateSejour,prix,nbrChambre,nbrBed,distance); 
    res.render('index', {data : biens});

    

    }catch (error){
        console.error("Erreur lors de la récupération des biens:", error);
        res.status(500).send("Erreur lors de la récupération des biens");
    }


});

const fetchBiens = (address,dateSejour,prix,nbrChambre,nbrBed,distance) => {
    return new Promise((resolve, reject) => {

        let sql = "SELECT *, AVG(locations.note) as moyenneNote, COUNT(locations.note) as nbrNotes FROM biens NATURAL JOIN locations WHERE 1";
        const params = [];

        if (address){
            sql += " AND commune = ? "
            params.push(address);
        }

        if (dateSejour){
            sql += " AND dateSejour = ?";
            params.push(dateSejour);
        }

        if (prix != "0"){
            sql += " AND prix <= ?";
            params.push(prix);
        }

        if (nbrChambre){
            sql += " AND nbChambres <= ?"
            params.push(nbrChambre);
        }

        if (nbrBed){
            sql += " AND nbCouchages <= ?"
            params.push(nbrBed);
        }

        if(distance){
            sql += " AND distance <= ?"
            params.push(distance);
        }

        console.log("Requête SQL:", sql);
        console.log("Paramètres:", params);


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
    try{
        
        
        const dataBien = await fetchDatabyIdBien(req.params.idBien);
        res.render('bien', {data: dataBien});
    }catch (error){
        console.error("Erreur lors de la récupération des données du biens:", error);
        res.status(500).send("Erreur lors de la récupération des données du biens");
    }

    
})

const fetchDatabyIdBien = (idBien) => {
    return new Promise((reject, resolve) =>{
        let sql = "SELECT * FROM biens WHERE idBien =?"
        sql += idBien

        con.query(sql, function(err,result){
            if (err){
                reject (err);
            }else{
                resolve(result);
            }
        });

    })
}


app.listen(8888);
console.log("Listening on port 8888");


