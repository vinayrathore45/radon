const BookModel= require("../models/bookModel")

const bookEntry= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookEntry= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}



module.exports.bookEntry= bookEntry
module.exports.getBookEntry= getBookEntry