const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    const token = jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: "3d"})
    return token;
}

const userSignup = async (req,res) => {

    const {name,email,password} = req.body;

    try {
        const user = await User.signup(name,email,password);

        const token = createToken(user._id)

        res.status(200).json({name,email,token});

    } catch (error){
        res.status(400).json({error: error.message})
    }

}

const userLogin = async (req,res) => {

    const {email,password} = req.body;

    try{
        const user = await User.login(email,password)
        const {name} = user;
        const token = createToken(user._id)
        res.status(200).json({email,name,token})

    }catch(error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    userLogin,
    userSignup
}