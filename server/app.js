import express from 'express'
import dotenv from 'dotenv'
import connectDB from './connection/Connection.js'



const app=express()

dotenv.config()
connectDB()



app.use(express.json())



app.listen(process.env.PORT,console.log(`server is running on port ${process.env.PORT}`))