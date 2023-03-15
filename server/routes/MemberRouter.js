import express from 'express'
import {Admission,CheckoutUser,memberPlan,tottalAmount,getMemberShipFee,Payment,VerifyPayment } from '../controllers/MemberController.js'
import { Login } from '../controllers/authController.js'
import protect from '../Middleware/authMiddleware.js'


const router = express.Router()


router.post('/login',Login)      

router.post('/admission',protect,Admission)

router.get('/checkout',protect,CheckoutUser)

router.get('/plan',memberPlan)

router.get('/tottalamount/:id',tottalAmount)

router.get('/getmembershipfee',getMemberShipFee)

router.post('/payment',Payment)

router.post('/VerifyPayment',VerifyPayment)

export default router 