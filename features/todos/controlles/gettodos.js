const todomodel = require("../schemas/todo");
const gettodos=async (req,res,next)=>{
    try{
        const todos= await todomodel.find().select();
        if (todos===0){
          return res.status(404).send("no todos found");
        }
        res.status(200).json(todos);

        } catch (error) {
            res.status(500).send("server error ");
            console.log(error);
          }
        };
        module.exports = gettodos;