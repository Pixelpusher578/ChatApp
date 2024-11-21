const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Region:{
        type:String,
        required:false
    },
    PhoneNum:{
        type:String,
        required:false
    },
    e_mail:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:false
    },
    isActive:{
        type:Boolean,
        required:true
    },
    oauth:{
        type:Boolean,
        required:true
    }



},{timestamps:true})

module.exports=mongoose.model('user',userSchema)