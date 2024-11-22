


//on cree l'application 
const express = require("express");
// Déclaration de l'application express

const fs = require("fs");

const app = express();


// lle moteur de l'ecteur
app.set('view engine', 'ejs');
// savoir la ou se setue les vues qui s'affiche sur le navigateur 
app.set("views", "./views")

app.use(express.static('public')) 

// Middleware pour parser le JSON dans les requêtes
//app.use(express.json());

// Routes GET existantes
//app.get("/", (req, res) => {
    //res.writeHead(200, {
     //   "content-type":"text/html;charset=utf-8"
  //  });
    //res.write("<b>akori za serveur maninou</b> je vie à tsoundzou 1.");
   //res.end();
//});



// la parti acceuill
app.get('/menu', (req, res) => {
   
    res.render('menu')
});

// la parti acceuill
app.get('/equipe', (req, res) => {
   
    res.render('equipe')
});

// la parti Menu



//la partie Equipe 

app.get("/equipe", (req, res) => {
    fs.readFile("equipe.html", (err, data) => {

        if(err){
            res.writeHead(404);
            res.write("le fichier est introuvable.");
        } else{
            res.writeHead(200, {
                "content-type":"text/html"});
                res.write(data);
        }
    
    res.end();
    });
});

// la partie Contact  

app.get("/contact", (req, res) => {
    fs.readFile("contact.html", (err, data) => {

        if(err){
            res.writeHead(404);
            res.write("le fichier est introuvable.");
        } else{
            res.writeHead(200, {
                "content-type":"text/html"});
                res.write(data);
        }
    
    res.end();
    });
});







module.exports = app;