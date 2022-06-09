const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )

router.post("/createAuthor",BookController.createAuthor )

router.get("/getBooksByChetanBhagat",BookController.getBooksByChetanBhagat )
router.get("/authorOfBook",BookController.authorOfBook )
router.get("/respondBack",BookController.respondBack)



module.exports = router;