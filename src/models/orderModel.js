const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    user_id: {
        type:ObjectId,
        ref: "userMW"
    } ,
    product_id:{
        type:ObjectId,
        ref: "productMW"
    },
    amount: Number,
    Date: String
})

module.exports= mongoose.model('orderMW',orderSchema)