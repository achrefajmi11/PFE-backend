const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const conge = express.Router();
const db = require('../models');
const demande = require("./demandeRoutes");








conge.post('/congeannuel', async (req, res, next) => {
    const Conge = {
        if(Conge) {
            res.status(400).send({ error: 'Something failed!' })
        }
    }
    try {
        await db.Conge.create({
            
            Date_debut: req.body.Date_debut,
            Date_retour: req.body.Date_retour,
            nombre_jrs: req.body.nombre_jrs,
            status: req.body.status,
            userId: req.body.userId,
        }).then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err))
    } catch (e) { console.log(e) }
})


conge.post('/status', (req, res, next) => {
//    dbx.Notification.create()// fixme
    if (req.body.type == "exception"){
        db.Congeex.update({
            status: req.body.status,
        }, { where: { id_Conge: req.body.id } })
            .then((response) => res.status(200).send(response))
            .catch((err) => {
                console.log(" error => ",err.message)
                res.status(400).send(err);
        })
    }
    else {
        db.Conge.update({
            status: req.body.status,
        }, { where: { id_Conge: req.body.id } })
            .then((response) => res.status(200).send(response))
            .catch((err) => {
                console.log(" error => ",err.message)
                res.status(400).send(err);
        })
    }
   
})


conge.get('/conge/:id', (req, res, next) => {
    db.Conge.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})

conge.get('/userConges/:id', (req, res, next) => { 
    db.Conge.findAll(
     {
        where: { userId: req.params.id }
     },
     { 
        include: "user"
     }
     )
    .then((response) =>{
        console.log("response => ", req.params.id); 
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(" error =>  ",err.message)
        res.status(400).send(err)
    })
})

conge.get('/conge', async (req, res, next) => {
    await db.Conge.update({
        vu : true
    },{
        where: {
                
        }
    });
    await db.Conge.findAll({ include: "user" })
        .then((response) => {
            response.map((v,i,a) => {
                const test = a
                    .filter(subV => v.dataValues.userId == subV.dataValues.userId && subV.dataValues.status == 1 )
                    .map(v => v.dataValues.nombre_jrs)
                    .reduce((acc,crr)=> acc+crr ,0);
                v.dataValues.usedDays = test;
                // console.log("v => " , v.dataValues.usedDays);
            })

            res.status(200).send(response);
        })
        .catch((err) => {
            console.log("bad request =>", err.message)
            res.status(400).send(err)
        }
        )
})
conge.get('/notifications', async (req, res, next) => {
    await db.Conge.findAll({
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
conge.patch('/conge/:id', (req, res, next) => {
    db.Conge.update({
        id: req.body.username,
    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})

conge.delete('/conge/:id', (req, res, next) => {
    db.Conge.destroy({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})
module.exports = conge;