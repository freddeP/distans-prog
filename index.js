const express = require("express");

const app = express();

app.use(express.static(process.cwd() + "/public"));


app.listen(3400,function(){

  console.log("app listens on: ", 3400)

});