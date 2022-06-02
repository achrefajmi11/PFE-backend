const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const congeex = express.Router();
const db = require('../models');
const demande = require("./demandeRoutes");

congeex.post('/congeexeptionnel', async (req, res, next) => {
    const Congeex = {
        if(Conge) {
            res.status(400).send({ error: 'Something failed!' })
        }
    }
    try {
        await db.Congeex.create({
            type_Conge: req.body.type_Conge,
            Date_debut: req.body.Date_debut,
            Date_retour: req.body.Date_retour,
            nombre_jrs: req.body.nombre_jrs,
            status: req.body.status,
            userId: req.body.userId,
        }).then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err))
    } catch (e) { console.log(e) }
})










congeex.post('/status', (req, res, next) => {
   //db.No.create()// fixme
    db.Congeex.update({
        status: req.body.status,
    }, { where: { id_Conge: req.body.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => {
            console.log(" error => ",err.message)
            res.status(400).send(err);
        })
})


congeex.get('/conge/:id', (req, res, next) => {
    db.Congeex.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})

congeex.get('/userCongess/:id', (req, res, next) => {
    console.log(" id => " , req.body.id); 
    db.Congeex.findAll(
        {
            where: { userId: req.params.id }
         },
         { 
            include: "user"
         }      
    )
    .then((response) =>{
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(" error =>  ",err.message)
        res.status(400).send(err)
    })
})

congeex.get('/congeex', (req, res, next) => {
    db.Congeex.findAll({ include: "user" })
        .then((response) => {
            response.map((v,i,a) => {
                const test = a
                    .filter(subV => v.dataValues.userId == subV.dataValues.userId && subV.dataValues.status == 1 )
                    .map(v => v.dataValues.nombre_jrs)
                    .reduce((acc,crr)=> acc+crr ,0);
                v.dataValues.usedDays = test;
                // console.log("v => " , v.dataValues.usedDays);
            })
            res.status(200).send(response)
        })
        .catch((err) => {
            console.log("bad request =>", err.message)
            res.status(400).send(err)
        }
        )
})
congeex.get('/notificationss', async (req, res, next) => {
     await db.Congeex.findAll({
         where: {
             vu : false
         }
     })
         .then((response) => {
             res.status(200).send(response);
         })
         .catch((err) => {
             console.log("bad request =>", err.message)
             res.status(400).send(err)
         }
         )
 })
congeex.patch('/conge/:id', (req, res, next) => {
    db.Congeex.update({
        id: req.body.username,
    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})

congeex.delete('/conge/:id', (req, res, next) => {
    db.Congeex.destroy({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})
module.exports = congeex;
