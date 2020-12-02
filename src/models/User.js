const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    Name:{
        type:String,
        validate(value){
           value=value.toLowerCase() 
        }
    },
    Location:{
        type:String,
        validate(value){
            value=value.toLowerCase()
        }
    }
})

module.exports=mongoose.model('User',UserSchema)