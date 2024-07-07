import User from '../Models/userModel';


export const findUserByEmail = async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw error;
    }
  };