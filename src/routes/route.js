const express = require('express');
const router = express.Router();

const middleWare= function(req,res){
    res.send("Global MiddleWare")
}
router.get("/test-middleWare",middleWare)

module.exports = router;