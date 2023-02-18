const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req,res,next) => {

    const bearerToken = req.headers.authorization
    
    if(!bearerToken) {
        return res.status(401).json({error: 'Authorization token required'})
    }
    const token = bearerToken.split(' ')[1]

    try {
    
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)

        // attaching the user id as a user property in the req object for next routes
        req.user = await User.findOne({_id},_id)
        next()
    }   
    catch(error) {
        res.status(401).json({error: "Request is not authorized"})
    }    
}

module.exports = requireAuth