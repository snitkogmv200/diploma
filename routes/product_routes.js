const Router = require('express')
const router = new Router()
const productController = require('../controller/product.controller')

router.post('/product', productController.createProduct)
router.delete('/product/:id', productController.deleteProduct)

module.exports = router