const express = require("express");
const  mongoose = require("mongoose");
const authrouter = require("./features/auth/routes");
const todos=require("./features/todos/routes")
const app = express();
const port = 3999;

app.use(express.json());
app.use(authrouter);
app.use(todos)
app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(port, () => {
  console.log(`listening on ${port} for requests`);
  mongoose.connect("mongodb://127.0.0.1:27017/todosdb").then(() => {
    console.log("connected");
  });
});