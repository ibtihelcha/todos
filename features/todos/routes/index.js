const express = require("express");
const todos = express.Router();
const gettodos= require("../controlles/gettodos");
const createtodo = require("../controlles/createtodo");
todos.get("/todo", gettodos);
todos.post("/todo",createtodo)
module.exports = todos;

