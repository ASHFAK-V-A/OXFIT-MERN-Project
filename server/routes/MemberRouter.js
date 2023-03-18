import express from 'express'
import {Admission,CheckoutUser,memberPlan,tottalAmount,getMemberShipFee,RazorPayInstance,VerifyPayment } from '../controllers/MemberController.js'
import { Login } from '../controllers/authController.js'
import protect from '../Middlewares/authMiddleware.js'
import checkPlanExpiration from '../Middlewares/checkMemberPlan.js'

const router = express.Router()


router.post('/login',Login)      

router.post('/admission',protect,Admission)

router.get('/plan',protect,checkPlanExpiration,memberPlan)

router.get('/checkout',protect,CheckoutUser)

router.get('/tottalamount/:id',tottalAmount)

router.get('/getmembershipfee',getMemberShipFee)

router.post('/payment',RazorPayInstance)

router.post('/VerifyPayment/:id',VerifyPayment)

export default router 