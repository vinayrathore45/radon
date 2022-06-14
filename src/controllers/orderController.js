const orderModel = require('../models/orderModel')
const userModel= require('../models/userModel')
const productModel = require('../models/productModel')
const { find } = require('../models/userModel')
const mongoose= require('mongoose')
 
const createOrder= async function(req,res){
    const data = req.body 
    let productId = req.body.product_id
    let userId = req.body.user_id
    const isValidObjectId = mongoose.isValidObjectId
    const head = req.headers.isfreeappuser;
    if(isValidObjectId(userId) && isValidObjectId(productId)){
       if(head===true){

       
    const createData = await orderModel.create(data)
    res.send({msg:createData})
       }
       else if(head===false){
        if(req.body.amount<=userModel.balance){
            let updatedBalance= await userModel.find().updateMany(
                {balance:{$gte:req.body.amount}},
                {balance:{eq:balance-req.body.amount}})

                const createData= await orderModel.create(data)
                res.send({msg:createData,updatedBalance})
                
        }
        else{
            res.send({msg:"insufficient Balance"})
        }


       }
}
else{
    res.send("User Id and Product Id is not Correct")
}
}
const getDataWithUserAndProduct= async function(req,res){
    getData = await orderModel.find().populate('user_id','product_id')
} 




module.exports.createOrder = createOrder