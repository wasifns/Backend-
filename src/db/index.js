import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log(`\nMongoDB connected ! DB host: ${connectionInstance.connection.host}`);

    }catch{
        console.log("\nMongoDB connection FAILED ", error);
        process.exit(1)
    }

}
export default connectDB