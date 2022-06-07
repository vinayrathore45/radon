const bookModel = require("../models/bookModel")

const createBook = async function(req, res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg:savedData})
}

const bookList = async function(req, res){
    
    let allBooksData = await bookModel.find().select({bookName: 1,authorName: 1, _id:0})
    res.send({msg:allBooksData})
}   

const getBookInYear = async function(req,res){
    let isPublished = req.body.year
    let dataWithYear = await bookModel.find({year:isPublished})
    res.send({msg:dataWithYear})
}

const getParticularBook = async function(req, res){
    let particularBook = req.body
    let allParticularBook= await bookModel.find({$or:[{bookName:particularBook.bookName},{authorName:particularBook.authorName},{tags:particularBook.tags},{price:particularBook.price},{totalPages:particularBook.totalPages}]})
    res.send({msg:allParticularBook})

}
const getInrBooks = async function(req, res){
    let inrBook = req.body
    let allInrBooks = await bookModel.find({$or:[{"price.indianRupees":{$eq:"100INR"}},{"price.indianRupees":{$eq:"200INR"}},{"price.indianRupees":{$eq:"500INR"}}]})
    res.send({msg:allInrBooks})
}

const getRandomBooks = async function(req,res){
    let randomBooks = req.body
    let allRandomBooks= await bookModel.find({ $or:[{totalPages:{$gt:500}}, {stockAvailable:true}]})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBookInYear= getBookInYear
module.exports.getParticularBook= getParticularBook
module.exports.getInrBooks= getInrBooks
module.exports.getRandomBooks= getRandomBooks