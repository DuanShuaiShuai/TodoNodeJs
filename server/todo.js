let Todo= require("../model/todo");

//查
async function getTodos() {
    return await Todo.find();
}



//增加
async function addTodos(todo) {
    let newVar = await isExit(todo);
   if(newVar){
       throw Error("添加失败，此事项已经存在！")
   }
   return await Todo.create(todo)
}
//更新
async function updateTodos(id,todo) {
    let res = await isExit({"_id": id});
    if(!res){
        throw Error(`id为${id}不存在`)
    }
    return await Todo.updateOne({"_id":id},todo);
}



//删除
async  function deleteOne(id) {
    let res = await isExit({"_id": id});
    if(!res){
        throw Error(`id为${id}不存在`)
    }
    return await Todo.deleteOne({"_id":id})
}
async function isExit(todo) {
    try {
        return await Todo.find(todo);
    } catch (e) {
        throw Error(`id为${todo.id}不存在`)
    }
}


module.exports={
    getTodos,
    addTodos,
    updateTodos,
    deleteOne,
}