import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
const app = express();

app.use('/auth', authRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch(err => console.error("Database Connection Error:", err));

app.listen(3000,()=>{
    console.log("Server Started");
})