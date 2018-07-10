module.exports=function (req,res,next) {
    res.sucesses=(data)=>{
        res.send({
            type:1,
            data:data
        })
    }

    res.fail=(msg)=>{
        res.send({
            type:0,
            data:msg
        })
    }
    next();
}