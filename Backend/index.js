const express=require('express')
const dotenv=require('dotenv')
const path=require('path')
dotenv.config()
const cors=require('cors')
const router = require('./Router/emailSendRouter')

const app=express()
app.use(express.json())
app.use(cors())
app.use('/api/portfolio',router)

app.get("/",(req,res)=>{
  res.send("app is working")
})

const port=process.env.PORT||8080;
app.listen(port,()=>{
  console.log(`app listen on  ${port}`)
})