const mid = function(req,res,next){
    const head = req.headers.isfreeappuser
    console.log(head)

    if(typeof head === "undefined"){
     res.send({msg:"request is missing a mandatory header"});
    }
    else{ 
        console.log("middleWare is working")
        next()
    }
    
}

module.exports.mid= mid