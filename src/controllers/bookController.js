const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookPublisher= req.body.publisher
    let bookAuthor= req.body.author
    const isValidObjectId = mongoose.isValidObjectId
 if(bookAuthor.length>0 && bookPublisher.length>0){   
    if( isValidObjectId(bookAuthor)&& isValidObjectId(bookPublisher)){
       let bookCreated = await bookModel.create(book) 
    res.send({data: bookCreated})
}
 else{
     res.send("author id or publisher id is not valid")
 }

}
else{
    res.send("author id and publisher id should not be empty")
}
}



const getBooksWithAuthorAndPublisher = async function (req, res) {
    let specificBook = await bookModel.find().populate('author','publisher')
    res.send({data: specificBook})

}

const book = async function(req,res){
    let data1 = await bookModel.updateMany(
        {publisher:"Penguin",publisher:"HarperCollins"},
        {isHardCover:true},
        res.send({msg:"data1"})
    )}

    const book1 = async function(req,res){

    let data = await authorModel.updateMany(
        {rating:{$gt:3.5}},
        {$inc:{price:10}},
        res.send({msg:"data"})
    )
}

module.exports.createBook= createBook
module.exports.getBooksWithAuthorAndPublisher = getBooksWithAuthorAndPublisher
module.exports.book= book
module.exports.book1= book1
