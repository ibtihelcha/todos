const express = require("express");
const authrouter = express.Router();
const getusers = require("../controllers/getusers");
const sign_up = require("../controllers/sign_up");
const deluser = require("../controllers/deluser");
const loginn = require("../controllers/login");

const getdatetodo = require("../controllers/getdatetodo");

authrouter.get("/users", getusers);
authrouter.post("/users", sign_up);
authrouter.delete("/users/:id", deluser);
authrouter.post("/users/login", loginn);
authrouter.get("/users/:id/todos", getdatetodo);

module.exports = authrouter;
