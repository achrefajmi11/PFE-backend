 const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const route = express.Router();
const db = require('../models');







route.post('createuser' , (req,res,next) =>{
    db.User.create({
     id : req.body.username,
     fullName : req.body.fullName ,
     username : req.body.username ,
     password : req.body.password ,
     email :req.body.email
    })   .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})




route.get('/user/:id', (req, res, next)=>{
db.User.findOne({where :{ id :req.params.id}})
.then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})
    route.get('/users', (req, res, next)=>{
        db.User.findAll()
        .then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err)) 
    })
            route.patch('/user/:id', (req, res, next)=>{
                db.User.update({
                    id : req.body.username,
                    fullName : req.body.fullName ,
                    username : req.body.username ,
                    password : req.body.password ,
                    email :req.body.email                   
                },{where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
                
            })

            route.delete('/user/:id', (req, res, next)=>{
                db.User.destroy({where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
            })
module.exports = route ;