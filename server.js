const express= require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser'); 
const db= require('./models');
const controller = require("./controller/controller");
const userRoutes = require("./routes/userRoutes");
const demandeRoutes = require("./routes/demandeRoutes")
const congeRoutes = require("./routes/congeRoutes")

  










controller.connection() 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/" , userRoutes);
app.use("/" ,demandeRoutes);
app.use("/" ,congeRoutes);
app.listen(3005, () => console.log(`Hello world app listening on port 3005!`))




