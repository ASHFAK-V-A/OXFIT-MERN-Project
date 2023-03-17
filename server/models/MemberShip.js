import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const MemberShipData = mongoose.Schema({
  memberId: {
    type: ObjectId, 
    required: true,
  },
  name: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
  address: [
    {
      age: Number,
    },
    {
      city: {
        type: String,
      },
      dob: {
        type: String,
      },
      gender: {
        type: String,
      },
      pincode: {
        type: Number,
      },
    },
  ],
});

const MemberShip = mongoose.model('membership',MemberShipData)

export default MemberShip