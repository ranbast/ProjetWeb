const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "e20230012081"
});

con.connect(function (err){
    if (err) throw err;
    console.log("Connected!");
})

app.get('/',(req,res) => {
    res.render('/views/index');
    
})

app.get('/'), function(req, res){
    con.query("SELECT * FROM Biens", function(err,result){
    if (err) throw (err);
    res.render('/views/index',{data: result});
});
}

app.listen(8888);
console.log("Listening on port 8888");
