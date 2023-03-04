import express from 'express'
import { adminLogin,AddMember,members } from '../controllers/AdminController.js'

const router = express.Router()

router.post('/login',adminLogin)

router.post('/addmember',AddMember)

router.get('/members',members)

export default router