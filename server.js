const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extender: true}));

app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");

var today = new Date();
var day = "";
switch(today.getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

app.get("/", function(req, res){
  res.render("index2", {kindOfDay: day})
});

app.get("/soc", function(req, res){
  res.render("index")
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
