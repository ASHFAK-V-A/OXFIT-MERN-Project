import express from 'express'
import {AddMember,members,AddPlan,PlanList} from '../controllers/AdminController.js'
import { adminLogin } from '../controllers/authController.js'

const router = express.Router()

router.post('/login',adminLogin)

router.post('/addmember',AddMember)

router.get('/members',members)

router.post('/addplan',AddPlan)

router.get('/planlist',PlanList)

export default router