const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const employe = express.Router();
const db = require('../models');






employe.post('/employe', async (req, res, next) => {
    const Employe = {
        if(Employe) {
            res.status(400).send({ error: 'Something failed!' })
        }
    }
    try {
        await db.Employe.create({
            Age: req.body.Age,
            fullName: req.body.fullName,
            username: req.body.username,
            Anicienneté: req.body.Anicienneté,
            matricule: req.body.matricule,
            userId: req.body.userId,
        }).then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err))
    } catch (e) { console.log(e) }
})




employe.get('/employe/:id', (req, res, next) => {
    db.Employe.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})

employe.get('/employe/:id', (req, res, next) => {
    console.log(" id => " , req.body.id); 
    db.Employe.findAll({ include: "user" },{
        where: { userId: req.params.id }
     })
    .then((response) =>{
        res.status(200).send(response)
    })
    .catch((err) => {
        console.log(" error =>  ",err.message)
        res.status(400).send(err)
    })
})

employe.get('/employes', (req, res, next) => {
    db.Employe.findAll({ include: "user" })
        .then((response) => res.status(200).send(response))
        .catch((err) => {
            console.log("bad request =>", err.message)
            res.status(400).send(err)
        }
        )
})
employe.patch('/employe/:id', (req, res, next) => {
    db.Employe.update({
        id: req.body.username,
    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

})

employe.delete('/employe/:id', (req, res, next) => {
    db.Employe.destroy({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))
})
module.exports = employe;