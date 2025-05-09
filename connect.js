import mongoose from "mongoose";
export default async function connectDB(url) {
    mongoose.connect(url).then(()=>{
        console.log("MongoDB Connected Succesfully!");

    }).catch((err)=>{
        console.log("Something went wrong while connecting DB!",err.message);
    });
    
}