const express=require('express')

require('./db/db')  //connecting with database
const bodyparser=require('body-parser')
const path=require('path')
const app=express()

const port=3000||process.env.PORT

app.use(express.json())    //parsing the incoming data
app.use(bodyparser.urlencoded({ extended: true })) // parsing the form data


const Userrouter=require('./router/user')
app.use('/user',Userrouter)


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.listen(port,(req,res)=>{
    console.log(`server is up at ${port}` )
})


