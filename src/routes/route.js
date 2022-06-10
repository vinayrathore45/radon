const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )
router.post("/createPublisher", publisherController.createPublisher  )


router.get("/getBooksWithAuthorAndPublisher", bookController.getBooksWithAuthorAndPublisher)
router.get("/book", bookController.book)
router.get("/book1", bookController.book1)

module.exports = router;