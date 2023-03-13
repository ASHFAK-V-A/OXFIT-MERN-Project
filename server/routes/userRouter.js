import express from 'express'
import {admission,CheckoutUser,memberPlan } from '../controllers/UserController.js'
import { Login } from '../controllers/authController.js'
import protect from '../Middleware/authMiddleware.js'


const router = express.Router()


   

router.post('/login',Login)      

router.post('/admission',protect,admission)

router.get('/checkout',protect,CheckoutUser)

router.get('/plan',memberPlan)

export default router 