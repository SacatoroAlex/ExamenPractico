// Librerias o paquetes necesario para Node
const express = require('express')
const routes = express.Router()


routes.get('/api/listas',(req, res) =>{
    req.getConnection ((err,conn)=>{
        if(err) return res.send(err);

        conn.query,'SELECT * FROM usuarios',(err,rows) =>{

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

//elinar datos 
routes.delete('/api/delete/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
        conn.query('DELETE FROM usuarios WHERE id =?',[req.params.id],(err,rows)=>{
            if(err)res.send(err)
            res.send('Usuario elimanado')
        })
    })
})


//editar datos

routes.put('/api/editar/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err)
        conn.query('UDATE usuarios SET ?WHERE is=? id =?',[req.body,params.id],(err,row)=>{
            if(err)res.send(err)
            res.send('Usuario modificado')
        })
    })
})

module.exports = routes;