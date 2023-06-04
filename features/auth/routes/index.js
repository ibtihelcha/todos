const express = require("express");
const authrouter = express.Router();
const getusers = require("../controllers/getusers");
const sign_up = require("../controllers/sign_up");
const deluser = require("../controllers/deluser");
authrouter.get("/users", getusers);
authrouter.post("/users", sign_up);
authrouter.delete("/users/:id", deluser);

module.exports = authrouter;
