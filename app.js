require("./db")
require("express-async-errors")
let config = require("./config");
let express = require("express");
let app = express();
let Todos = require("./router/todos");
let bodyParser = require("body-parser");

app.use(bodyParser.json());

//中间件
app.use(require("./utils/res_util"))

app.use("/todo",Todos)
app.use((err, req, res, next)=>{

    res.status(500).fail(err.message)
});

app.listen(config.PROT)
