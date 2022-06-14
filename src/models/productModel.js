const mongoose= require('mongoose')

const productSchema= new mongoose.Schema({
   product_name: String,
   category: String,
   price:{
    type: Number,
    required: true
   }

})

module.exports= mongoose.model('productMW',productSchema)