const express = require('express');
const app = express();
var multipart = require('connect-multiparty');
const bodyParser = require("body-parser");
global.app = module.exports = express();
app.use(multipart())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app)
require('./controllers/projectController')(app)
app.get("/", function (req,res){

})
app.get("/sobre", function (req,res){
  console.log('a',req.body)
})

let author = "Gabriel"
app.post("/teste", (req, res) => {
  console.log(req.body)
})
app.put("/teste", (req, res) => {
  console.log("Old: ",author);
  author = req.body.author;
  console.log("New: ",author);
})
app.listen(3000);

console.log("Rodando o servidor");
