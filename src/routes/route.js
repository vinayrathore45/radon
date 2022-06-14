const express = require('express');
const router = express.Router();
const MiddleWare = require('../middleWares/middleWare')
const UserController = require('../controllers/userController')
const ProductController = require('../controllers/productController')
const OrderController = require('../controllers/orderController')


router.post('/createUser',MiddleWare.mid,UserController.createUser)
router.post('/createProduct',ProductController.createProduct)
router.post('/createOrder',MiddleWare.mid,OrderController.createOrder)




module.exports = router;