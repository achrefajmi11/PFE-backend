const express= require("express");
const app = express();
const db= require('./models');
app.use(express.urlencoded({extended: true}));
const controller = require("./controller/controller");
controller.init()
app.use(express.json());