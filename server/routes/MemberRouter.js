import express from 'express'
import {Admission,CheckoutUser,memberPlan,ActivatePlan } from '../controllers/MemberController.js'
import { Login } from '../controllers/authController.js'
import protect from '../Middleware/authMiddleware.js'


const router = express.Router()


router.post('/login',Login)      


router.post('/admission',protect,Admission)


router.get('/checkout',protect,CheckoutUser)


router.get('/plan',memberPlan)


router.post('/registerplan',ActivatePlan)



export default router 