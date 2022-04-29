const express= require("express");
const app = express();
const bodyParser = require('body-parser'); 
const db= require('./models');
const controller = require("./controller/controller");
const userRoutes = require("./routes/userRoutes");
controller.connection() 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/" , userRoutes);


app.get('/handle',(request,response) => {
response.send('Hello World, from express');
});

app.post('/handle',(request,response) => {
   console.log(request.body)
    response.send(request.body)
    });

app.listen(3001, () => console.log(`Hello world app listening on port 3001!`))
