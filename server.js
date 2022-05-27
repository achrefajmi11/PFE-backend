const express= require("express");
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser'); 
const db= require('./models');
const controller = require("./controller/controller");
const userRoutes = require("./routes/userRoutes");
const EmployeRoutes = require("./routes/EmployeRoutes")
const congeexeptionnel = require("./routes/congeexeptionnel");
const congeRoutes = require("./routes/congeRoutes");
const Congeexeptionnel = require("./models/Congeexeptionnel");


controller.connection() 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.use("/" , userRoutes);
app.use("/" ,EmployeRoutes);
app.use("/" ,congeRoutes);
app.use("/" ,congeexeptionnel);






app.listen(3006, () => console.log(`Hello world app listening on port 3005!`))




