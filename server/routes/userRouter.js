import express from 'express'
import { Login,admission,CheckoutUser } from '../controllers/UserController.js'
import protect from '../Middleware/authMiddleware.js'


const router = express.Router()


   

router.post('/login',Login)      

router.post('/admission',protect,admission)

router.get('/checkout',protect,CheckoutUser)

export default router 