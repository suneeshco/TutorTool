import { createUser } from "../Repository/authRepository.js";
import { findUserByEmail } from "../Repository/authRepository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

export const studentSignup = async(req,res) =>{
    try {
        const { firstname, email, password } = req.body;
       
        
         const user = await findUserByEmail(email)
        if(user){
           res.send({error : "Email Already Exists"})
        }else{
          const newUser = await createUser(firstname,email,password);
          res.send({user:newUser})
        }  
    } catch (error) {
        console.log("error",error);
        res.status(500).send({ message: 'Server Error' });
      }
}


export const studentLogin = async(req,res) =>{
    try {
        const { email, password } = req.body;
        const existingUser = await findUserByEmail(email);

        
        if (!existingUser) {
         return res.send({err:{error: 'User Not Exists'}}) ;
        }
    
        const passwordMatch = await bcrypt.compare( password, existingUser.password);

        if (!passwordMatch) {
          return res.send({err:{error: 'Incorrect Password' } });
        }
        const token = jwt.sign({ _id: existingUser._id }, process.env.TOKEN_SECRET);
        
        return res.send({user:{user:existingUser,token:token}});
        
          
    } catch (error) {
        console.log("error",error);
        res.status(500).send({ message: 'Server Error' });
      }
}
