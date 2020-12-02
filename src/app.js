const express=require('express')
const { use } = require('./router/user')
require('./db/db')  //connecting with database
const bodyparser=require('body-parser')
const app=express()

const port=3000||process.env.PORT

app.use(express.json())    //parsing the incoming data
app.use(bodyparser.urlencoded({ extended: true })) // parsing the form data


const Userrouter=require('./router/user')
app.use('/user',Userrouter)


app.get('/',(req,res)=>{
    res.sendFile('/Kritik_Dalakoti/src/public/index.html')
})

app.listen(3000,(req,res)=>{
    console.log(`server is up at ${port}` )
})


