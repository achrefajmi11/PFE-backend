const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const conge = express.Router();
const db = require('../models');







conge.post('/conge' , (req,res,next) =>{
    db.Conge.create({
    
     
    })   .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})




conge.get('/conge/:id', (req, res, next)=>{
db.Conge.findOne({where :{ id :req.params.id}})
.then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})
conge.get('/conge', (req, res, next)=>{
    db.Conge.findAll()
    .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err)) 
})
            conge.patch('/conge/:id', (req, res, next)=>{
                db.Conge.update({
                    id : req.body.username,              
                },{where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
                
            })

            conge.delete('/conge/:id', (req, res, next)=>{
                db.Conge.destroy({where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
            })
module.exports = conge  ;