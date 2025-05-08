import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
dotenv.config();
mongoose.connect(MONGO_URI)
const app = express();
const PORT= process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.get('/',function(req,res){
    res.render('home');
})
app.use('/user',userRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
})
