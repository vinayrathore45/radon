const bookModel = require('../models/productModel')

const createProduct= async function(req,res){
  const  data= req.body
    const createData = await bookModel.create(data)
    res.send({msg:createData})
}

module.exports.createProduct= createProduct