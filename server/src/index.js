import express from 'express';
import mongoose from 'mongoose';
import authRoute from './Router/authRoute.js'
import studentRoute from './Router/studentRoute.js'
import cors from 'cors';
import 'dotenv/config'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));
app.use('/auth', authRoute);
app.use('/student',studentRoute)

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error("Database Connection Error:", err));

app.listen(3000,()=>{
    console.log("Server Started");
})