import mongoose from "mongoose";    
import { dbName } from "../constants.js";  
 
const connectDB = async ()=>{
    try{
        const connectionInstants = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`)
        console.log(`\n mongos db connected !! db host : ${connectionInstants.connection.host}`)
    }catch(error){
        console.log("Error",error)
        process.exit(1)
    }
}

export default connectDB;