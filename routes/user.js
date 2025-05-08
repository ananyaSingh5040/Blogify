import express from "express";
import handleUserSignup from "../controllers/user.js"
const {Router} = express;
const router = Router();
router.get("/signup",function (req,res){
    return res.render("signup");
});
router.post("/signup",handleUserSignup);
// router.post("/login",handleUserLogin);
export default router;