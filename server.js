const express= require("express");
const app = express();
const db= require('./models');
app.use(express.urlencoded({extended: true}));
const controller = require("./controller/controller");
controller.init()
app.use(express.json());



db.sequelize.sync().then(() => {
    app.listen(4100,()=> console.log("serveur listening in port 3600"))
})