import express from "express";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routes/user.js";
import connectDB from "./connect.js";
dotenv.config();
connectDB(process.env.MONGO_URI);
const app = express();
const PORT= process.env.PORT || 8000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views",path.resolve("./views"));

app.get('/',function(req,res){
    res.render('home');
})
app.use('/user',userRouter);

app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`);
})
