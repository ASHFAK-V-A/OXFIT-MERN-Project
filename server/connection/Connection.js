import mongoose from "mongoose";

const connectDB=async()=>{
    try{
        mongoose.set('strictQuery', false);
    const db=await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`mongoose connected ${db.connection.host}`);
    }catch(err){
        console.log(err.message);
        process.exit(1)
    }
}
export default connectDB