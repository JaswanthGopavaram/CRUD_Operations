
const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const os=require('os')

const errorHandler = require('./middleware/ErrorHandler')
const connectDb = require('./config/dbConnections')

connectDb();

const port= process.env.PORT || 3500


app.use(express.json())
app.use('/api/book',require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})