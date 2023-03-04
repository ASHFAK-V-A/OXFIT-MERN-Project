import express from 'express'
import { Login,admission } from '../controllers/UserController.js'



const router = express.Router()


   

router.post('/login',Login)      

router.post('/admission',admission)


export default router