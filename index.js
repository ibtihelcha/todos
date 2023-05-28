const express =require('express')
const app=express()
const port=3999
app.get('/',(req,res)=>{
    res.send("hello")

})
app.listen(port,()=>{
    console.log (`listening on ${port} for requests`)
})