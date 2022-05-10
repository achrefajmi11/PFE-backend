 const { response } = require("express");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const route = express.Router();
const db = require('../models');
const bcrypt =require('bcrypt')
const jwt  =require('jsonwebtoken');
const { json } = require("express/lib/response");





route.post('/register' , (req,res,next) =>{
    db.user.count({where:{matricule:req.body.matricule}}).then(doc=>{
        if(doc!=0){
            res.status(400).send("This matricul is used")
        }{
            bcrypt.hash(req.body.password,10).then(hashedPassword=>{
                db.user.create({
    fullName : req.body.fullName ,
     username : req.body.username ,
     password : hashedPassword ,
     matricule :req.body.matricule
    })   .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})
}
}) 

})
const Privatekey= "aaaaa"
route.post('/login' , (req,res,next) =>{
    db.user.findOne({where:{matricule:req.body.matricule}}).then(user=>{

        if(!user){
            res.status(400).json({msg:"invalid matricule or password"})
        }else{
            bcrypt.compare(req.body.password,user.password).then(same=>{
                if(same){
                    let token = jwt.sign({id:user.id,username:user.id,role:"username"},Privatekey,{
                        expiresIn:"24h"
                    } )
                    res.status(200).json({token:token})
                }else{
                    res.status(400).json({msg:"ivalid matricule or password"})
                }
     
})
}
}) 

})
route.get('/user/:id', (req, res, next)=>{
db.user.findOne({where :{ id :req.params.id}})
.then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err))


})
    route.get('/users', (req, res, next)=>{
        db.user.findAll()
        .then((response) => res.status(200).send(response))
            .catch((err) => res.status(400).send(err)) 
    })
            route.patch('/user/:id', (req, res, next)=>{
                db.user.update({
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
                db.user.destroy({where: {id:req.params.id}})
                .then((response) => res.status(200).send(response))
                    .catch((err) => res.status(400).send(err)) 
            })
module.exports = route ;