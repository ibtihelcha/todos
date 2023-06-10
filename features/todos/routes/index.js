const express = require("express");
const todos = express.Router();
const gettodos= require("../controlles/gettodos");
const createtodo = require("../controlles/createtodo");
const deltodo = require("../controlles/deltodo");
const updatetodo = require("../controlles/updatetodo");
todos.get("/todo", gettodos);
todos.post("/todo",createtodo)
todos.delete("/todo/:id",deltodo)
todos.patch("/todo/:id",updatetodo)
module.exports = todos;

