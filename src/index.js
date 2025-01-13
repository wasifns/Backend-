import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"
dotenv.config({
    path: './.env'
})

//server running or not logic 

connectDB()
.then(() => { 
    app.listen(process.env.PORT);
    console.log(`Server is listing on port: ${process.env.PORT}`);
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
})