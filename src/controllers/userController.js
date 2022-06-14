const userModel= require('../models/userModel')
 
const createUser =  async function(req,res){
   const data = req.body
   const createData = await userModel.create(data)
    res.send({msg:createData})
}


module.exports.createUser= createUser