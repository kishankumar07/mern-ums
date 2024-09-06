import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async(req,res,next) => {
    let token;
    token = req.cookies.jwt;
    // console.log('token took from cookie : ',token)
    if(token){
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            console.log('decoded value is :',decoded)
            req.user = await User.findById(decoded.userId).select('-password');
            //The above line will excludes password field only
            console.log('decoede value',req.user)
            next();

        }catch(err){
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }
    }else{
        res.status(401);
        throw new Error('Not authorized,no token');
    }
})

export {protect}