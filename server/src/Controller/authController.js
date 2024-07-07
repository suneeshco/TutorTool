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