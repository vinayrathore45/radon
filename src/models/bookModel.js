const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   
   author_id:{
       type: String,
       required:true
   },
   name:String,
   prices:Number,
   rating:Number

},
{timestamps:true})

module.exports= mongoose.model('bookData',bookSchema)