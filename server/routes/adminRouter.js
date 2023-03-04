import express from 'express'
import { adminLogin,AddMember } from '../controllers/AdminController.js'

const router = express.Router()

router.post('/login',adminLogin)

router.post('/addmember',AddMember)

export default router