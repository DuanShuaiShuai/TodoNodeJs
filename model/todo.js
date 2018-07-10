let mongoose = require("mongoose");
let schema = mongoose.Schema({
    content:{
        type:String,
        required:true,
        unique:true
    },
    isDone:{
      type:Boolean,
      default:false
    },
    created:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("todo",schema)