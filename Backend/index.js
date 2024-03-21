import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {port,mongoDbUrl} from './Config.js'
import router from './Router/RegRouter.js'
const app=express()
app.use(express.json())
app.use(cors())
app.use('/',router)
mongoose.connect(mongoDbUrl)
.then(()=>{
    console.log("connected")
    app.listen(port,()=>{
        console.log("is running",port)
    })
})