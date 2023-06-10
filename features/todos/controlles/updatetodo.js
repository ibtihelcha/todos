const todomodel = require("../schemas/todo");

const updatetodo=async (req ,res,next)=>{
    try{
    const id = req.params.id;
    const updatetodo = await todomodel.updateOne(
        { _id: id },
      {$set:{
            value: req.body.value,
        },
    }
     );
     const valueupdate= await todomodel.find( 
        { _id: id },)

     console.log(updatetodo)
      if (updatetodo===0){
        return res.status(404).send("no todos found");
      }
      res.status(200).json(valueupdate);}
      catch (error) {
        res.status(500).send("server error ");
        console.log(error);
      }}
    
        module.exports = updatetodo;