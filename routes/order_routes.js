const Router = require('express')
const router = new Router()
const orderController = require('../controller/order.controller')

router.get('/ordr', orderController.getOrder)
router.get('/ordr/:id', orderController.getOneOrder)
router.post('/ordr', orderController.createOrder)
router.put('/ordr', orderController.updateOrder)
router.delete('/ordr/:id', orderController.deleteOrder)
router.get('/ordr', orderController.getOrdersByUser)

module.exports = router