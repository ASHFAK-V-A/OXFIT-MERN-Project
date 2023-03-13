import mongoose from "mongoose";


const memberSchema = mongoose.Schema({
    member:{type:mongoose.Schema.Types.ObjectId,ref:"Members"},
    plan:{type:mongoose.Schema.Types.ObjectId,ref:"Plan"},
    startDate: { type: Date, default: Date.now },
    expirationDate: { type: Date, required: true },
})

export const memberPlan = mongoose.model('MemberScheam',memberSchema)