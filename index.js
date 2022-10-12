const express = require("express");
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes')

// levantamiento un servidor 
const app = express();
app.set('port',process.env.PORT||3000);

// opcionn de conecion a base de datos

const optionsDB={
    host: 'localhost',
    user: 'root',
    database: 'cliente',
    port: 3306
}

//midleware 

app.use( myconn (mysql, optionsDB,'single'))
app.use(express.json())

//ruta principal
app.get('/', (req, res)=> {
    res.send('Hola mundo')
})

//Enlace del index.js con el de routes.js
app.use('/',routes)
app.listen(app.get('port'),()=>{
    console.log('Servidor ejecutandose en el puerto', app.get('port'))
})