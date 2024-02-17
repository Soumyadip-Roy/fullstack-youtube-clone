// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/db.js";
import dotenv from "dotenv";

// import express from "express";
// const app = express();

// Approach 01
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.error(err);
//             throw err;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`listining on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// })();

 dotenv.config({path:'./env'})

 connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    }
 })
 .catch((err) => {
    console.log("Mongodb connection failed", err)
 })

