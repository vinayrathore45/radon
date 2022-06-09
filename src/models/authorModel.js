const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    author_name:String,
    author_id:{
        type:String,
        unique:true,
        required:true
    },
   
    age: Number,
    address:String
},{timestamps:true})


module.exports= mongoose.model('authorData',authorSchema)