const express = require('express');
const router = express.Router();// const UserModel= require("../models/userModel.js")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook)

router.get("/booklist", BookController.bookList)

router.post("/getBookInYear", BookController.getBookInYear  )

router.post("/getParticularBook", BookController.getParticularBook  )

router.post("/getInrBooks", BookController.getInrBooks  )

router.post("/getRandomBooks", BookController.getRandomBooks  )

module.exports = router;     