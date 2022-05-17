const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const conge = express.Router();
const db = require('../models');






conge.post('/conge', async (req, res, next) => {
    const Conge = {
    if (Conge) {
        res.status(400).send({ error: 'Something failed!' })
    }
    }    
    try {
        await db.Conge.create({
            type_Conge: req.body.type_Conge,
            Date_debut: req.body.Date_debut,
            Date_retour: req.body.Date_retour ,
            nombre_jrs: req.body.nombre_jrs
        }).then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err))
    } catch (e) { console.log(e) }
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