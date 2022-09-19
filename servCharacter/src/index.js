const express = require("express");
const {connectDb} = require('../server/db/conn.js');
const userRoutes = require('../routes/route');

const cors = require('cors');// Cors permet de gérer les connexion entre plusieurs domaines( entre front et back )
const bodyParser = require('body-parser');


// nous permet de gérer la lecture de donnée qui va arriver du coté du client, autoriser la requete et lire les donnée qui arrive
const app = express();

app.use(cors());
app.use(express.json({extend:false }))
app.use(userRoutes);


connectDb().catch(err => console.log(err));
app.listen(7000, () => {
    console.log("Started application on port %d", 7000);
});





