const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBook= async function(req, res){
    let data= req.body
    let savedData = await bookModel.create(data)
     res.send({msg:savedData})
}

const createAuthor = async function (req, res){
    let data = req.body 
    let savedData = await authorModel.create(data)
    res.send({msg:savedData})

}

const getBooksByChetanBhagat = async function (req, res){
    let data = await authorModel.find({author_name:"Chentan Bhagat"}).select("author_id")
    let bookData= await bookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}

const authorOfBook = async function (req,res){
    let data = await bookModel.findOneAndUpdate({name:"Two States"},{$set:{prices:100}},{new:true})
   let authorData= await authorModel.find({author_id:data.author_id}).select("author_name")
   let price = data.prices
   res.send({msg:authorData,prices})
}


const respondBack = async function (req, res){
    let data = await bookModel.find({prices:{$gte:50, $lte:100}}).select({"author_id":1})
    let findData= await authorModel.find({author_id:data.author_id}).select({author_name:1})
    res.send({msg:findData})
}

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.getBooksByChetanBhagat = getBooksByChetanBhagat
module.exports.authorOfBook= authorOfBook
module.exports.respondBack= respondBack
