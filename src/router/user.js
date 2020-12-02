const express=require('express')
const User=require('../models/User')
const router=express.Router()

router.post('/data',async (req,res)=>{
    
    req.body.Name=req.body.Name.trim().toLowerCase().replace(/\s/g,'')
    req.body.Location=req.body.Location.trim().toLowerCase().replace(/\s/g,'')
    
    console.log(req.body)
    const user=new User(req.body)
    await user.save()
    res.sendFile('/Kritik_Dalakoti/src/public/redirect.html')
})

router.get('/data',async(req,res)=>{
    
    const users=await User.find({})
    res.send(users)
})

router.get('/search/:val',async(req,res)=>{
    var val=req.params.val
    console.log(val)
    val=val.trim().toLowerCase().replace(/\s/g,'')
    console.log(val)
    const result=await User.find({$or:[{Name:val},{Location:val}]})
    console.log(result)
    res.send(result)
})

module.exports=router