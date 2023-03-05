import express from 'express'
import { Login,admission } from '../controllers/UserController.js'
import protect from '../Middleware/authMiddleware.js'


const router = express.Router()


   

router.post('/login',Login)      

router.post('/admission',protect,admission)


export default router 