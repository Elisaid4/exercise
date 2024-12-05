





//on cree l'application 

//midlware de connection a la bese de donne 


//pool strategie de connection
const express = require("express");

// Déclaration de l'application express
const myConnection = require('express-myconnection');
const mysql2 = require('mysql2');




const app = express();







const optionConnection = {

    host : 'localhost',
    user : 'root',
    password : 'Melinecarlose@2',
    database : 'restaurent',
    port : 3306,
};

app.use(myConnection(mysql2,optionConnection, "pool"));
app.use(express.urlencoded({extended: false}));




// lle moteur de l'ecteur
app.set('view engine', 'ejs');
// savoir la ou se setue les vues qui s'affiche sur le navigateur 
app.set("views", "./views")

app.use(express.static('public'));

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

// app.get("/accueil", (req, res) => {
//     req.getConnection((erreur, connection) => {
//         if (erreur) {
//             console.log("Erreur de connexion :", erreur);
            
//         } 
//         else{
//                 connection.query("SELECT * FROM plat", (err, resultat) => {
//             if (err) {
//                 console.log("Erreur de requête :", err);
                
//             }
//             else {
//                 console.log("Résultat :", resultat);
//             res.render("index", { resultat });
//             }
            
//         });
            
//         }
        
       
//     });
// });

app.get('/menu', (req, res) => {
   
    res.render('menu')
});


app.post("/plat",(req, res) => {
    console.log("corps requete body: ",req.body);
    console.log("corps requete nom: " ,req.body.nom);
    console.log("corps requete prix: " ,req.body.prix);

    let nomPlat = req.body.nom;
    let prixPlat = req.body.prix;

    req.getConnection((erreur, connection) => {
        if(erreur) {
            console.log(erreur); 
        }else {
            connection.query("INSERT INTO plat (nom, prix) VALUES(?,?)",[nomPlat,prixPlat], (err, resultat) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Insertion reussie ==) ");
                    res.status(300).redirect("menu");
                }
            
            
            });
        }
      
    });
});
  
   // res.render("formaplat");
//});

//app.get('/',(req, res) => {
   
  //  res.render('index')
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


app.get('/contact', (req, res) => {
   
    res.render('contact')
});
//la partie Equipe 




// la partie Contact  








module.exports = app;