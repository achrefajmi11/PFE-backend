const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const demande = express.Router();
const db = require('../models');







demande.post('/demande' , (req,res,next) =>{
    


         db.Demande.create({
    
        status: req.body.status,
    })   .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})




demande.get('/demande/:id', (req, res, next)=>{
db.Demande.findOne({where :{ id :req.params.id}})
.then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})
demande.get('/demande', (req, res, next)=>{
    db.Demande.findAll()
    .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err)) 
})
            demande.patch('/demande/:id', (req, res, next)=>{
                db.Demande.update({
                    id : req.body.username,              
                },{where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
                
            })

            demande.delete('/demande/:id', (req, res, next)=>{
                db.Demande.destroy({where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
            })
module.exports = demande  ;