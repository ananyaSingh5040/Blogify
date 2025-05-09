import User from "../models/user.js";
export default async function handleUserSignup(req,res) {

    const{name,email,password} = req.body;
    await User.create({
        name,
        email,
        password,

    });
    return res.render("home",{username: name});
}
