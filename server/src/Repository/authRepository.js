import User from '../Models/userModel.js'
import bcrypt from 'bcrypt'


export const findUserByEmail = async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw error;
    }
  };



  

export const createUser = async (firstname, email, password) => {
    try {
      
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        firstname,
        email,
        password: hashedPassword
      });  
      await newUser.save()
      return newUser;
    } catch (error) {
      throw error;
    }
  };