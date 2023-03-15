import mongoose from "mongoose";

const MemberShipFee= mongoose.Schema({
    membershipfee:{
        type:Number
    }
},
{ timestamps: true })

const MemberShipFeeScheam = mongoose.model('MemberShipFee',MemberShipFee)

export default MemberShipFeeScheam 