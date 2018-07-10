let express = require("express");
let router = express.Router();
let todoServer = require("../server/todo");
//查
router.get("/list",async (req,res)=>{
    let todos = await todoServer.getTodos();
    res.sucesses(todos);
})
//添加
router.post("/add",async (req,res)=>{
    console.log(req.body);
    let newVar = await todoServer.addTodos(req.body);
    if(newVar){
        res.sucesses("事项添加成功！")
    }else{
        res.fail("添加失败！")
    }
})
//更新
router.put("/update/:id",async (req,res)=>{
    console.log("body:"+req.body);
    console.log(req.params.id);
    let newVar = await todoServer.updateTodos(req.params.id,req.body);
    if(!newVar.n<1){
        res.sucesses("事项更新成功！")
    }else{
        res.fail("事项更新失败！")
    }
})
//删除
router.delete("/delete/:id",async (req,res)=>{
    console.log(req.params.id);
    let newVar = await  todoServer.deleteOne(req.params.id);
    if(!newVar.n<1){
        res.sucesses("事项删除成功！")
    }else{
        res.fail("事项删除失败！")
    }
})




module.exports=router