const usermodel = require("../schemas/user");

const loginn=async (req ,res,next)=>{
  
    try{
        const login = await usermodel.find( { password:req.body.password,email: req.body.email},)
    
        if (login.length===0){
        return res.status(404).send("no user found ");
      }
      res.status(200).json(login);
    }catch (error) {
        res.status(500).send("server error ");
        console.log(error);
      }}
      module.exports =loginn;
