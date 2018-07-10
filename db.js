let mongoose = require("mongoose");
let config = require("./config");

mongoose.connect(config.DB);

let db = mongoose.connection;
db.on("error",(err)=>{
    console.log(err);
})

db.on("open",()=>{
    console.log("connection is succfully!");
})