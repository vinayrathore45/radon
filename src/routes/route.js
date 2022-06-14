const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleWare = require("../middleWares/middleWare")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",MiddleWare.mid1, userController.getUserData)

router.put("/users/:userId",MiddleWare.mid1, userController.updateUser)
router.delete("/users/:userId",MiddleWare.mid1,userController.deleteUser)

module.exports = router;