import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connection/Connection.js'
import UserRouter from './routes/UserRouter.js'
import cors from 'cors'

const app=express()

dotenv.config()
connectDB()
 
   

app.use(express.json()) 
app.use(cors())


app.use('/',UserRouter) 



app.listen(process.env.PORT,console.log(`server is running on port ${process.env.PORT}`)) 