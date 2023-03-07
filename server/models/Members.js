import mongoose from "mongoose";

const MembersSchema= mongoose.Schema({


name:{
    type:String,

},
email:{
type:String,
required:true,
unique:true
},


password:{
type:String,
required:true
},


address:{
    type:String   
},

phonenumber:{
    type:Number
},
city:{
    type:String
},
pincode:{
    type:Number
},
bloodgroup:{
    type:String
},
age:{
    type:Number
},
DOB:{
    type:String
},
gender:{
    type:String
},
isApplication: { 
    type: Boolean,
     default: false 
    }

})

const Members=mongoose.model('Members',MembersSchema)

export default Members