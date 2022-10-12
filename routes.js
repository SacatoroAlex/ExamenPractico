// Librerias o paquetes necesario para Node
const express = require('express')
const routes = express.Router()


routes.get('/api/listar',(req, res) =>{
    req.getConectiones((err,conn)=>{
        if(err) return res.send(err);
        conn.query,'SELECT * FROM datos',(err,rows) =>{
        if(err) res.send(err)
        res.json(rows);
        }
    })
})

module.exports = routes;