import express from "express";
import dotenv from 'dotenv';
dotenv.config()
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
const port =process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/api/users',userRoutes)

app.get('/',(req,res)=>res.send('server is running'));

app.use(notFound);
app.use(errorHandler)

app.listen(port,()=>console.log(`http://localhost:${port}`))