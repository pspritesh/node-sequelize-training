const express = require('express')
const router = new express.Router()
const subRouter = new express.Router({mergeParams: true})

const auth = require('../middlewares/auth')
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')

router.get('/login', loginController.jwtLogin)

subRouter.route('/products')
  .get(userController.getAllProducts)
  .post(userController.createProduct)
subRouter.route('/products/:productId')
  .put(userController.updateProduct)
  .delete(userController.deleteProduct)

subRouter.route('/products/:userId/mtm')
  .get(userController.getProduct)
  .post(userController.addNewProduct)
subRouter.route('/products/:productId/image')
  .get(userController.getProductImage)
  .post(userController.addNewProductImage)
subRouter.post('/products/:userId/:productId', userController.assignProduct)

subRouter.route('/')
  .get(userController.getUsers)
  .post(userController.addUser)
subRouter.route('/:userId')
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

subRouter.get('/:productId/pdf', userController.generatePDF)

router.use('/users', auth.jwtAuth, subRouter)

// Handles 404 requests
router.use((req, res) => res.status(404).json("Page not found!"))

module.exports = router
