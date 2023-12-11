const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/usr', userController.createUser)
router.get('/usr', userController.getUser)
router.get('/usr/:id', userController.getOneUser)
router.put('/usr', userController.updateUser)
router.delete('/usr/:email', userController.deleteUser)

module.exports = router