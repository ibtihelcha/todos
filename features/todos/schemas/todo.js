const mongoose=require("mongoose")
const todoshema=new mongoose.Schema({
    value:String,
    date:Date,
    state:String,
    user_id:String,

})
const todomodel =mongoose.model("todo",todoshema);
module.exports=todomodel