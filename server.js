

const http = require('http');
const app = require('./app.js');

// Fonction pour obtenir la date et l'heure actuelles sous forme de chaîne
function getCurrentDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} à ${hours}:${minutes}:${seconds}`;
}

app.set("port", 3002);

// Création du serveur sans log à chaque requête
const server = http.createServer(app);

// Affiche la date et l'heure de démarrage lors de l'écoute
server.listen(3002, () => {
    console.log(`Serveur démarré le ${getCurrentDateTime()}`);
});



// run with `node server.mjs`