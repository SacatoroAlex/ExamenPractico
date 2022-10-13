// Librerias o paquetes necesario para Node
const express = require('express')
const routes = express.Router()


routes.get('/api/listas',(req, res) =>{
    req.getConnection ((err,conn)=>{
        if(err) return res.send(err);

        conn.query,'SELECT * FROM datos',(err,rows) =>{

        if(err) res.send(err)
        res.json(rows)
        }
    })
})


//insertar datos
routes.post ('/api/adddatos',(req,res)=>{
    req.getConnection((err,conn)=>{
        
        if(err) return res.send(err)
        conn.query('INSERT INTO datos SET ?',[req.body],(err,rows)=>{
            if(err) res.send(err)
            res.json(rows)
        })
    })
})


module.exports = routes;