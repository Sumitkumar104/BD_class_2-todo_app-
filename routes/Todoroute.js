const express = require("express");
const router = express.Router();
const  {createTodo}  = require("../controllers/createTodo");
const {getallTodo}=require("../controllers/getallTodo");

// Middleware to parse JSON requests
router.use(express.json());

router.post("/createTodo", createTodo);
router.get("/getallTodo",getallTodo);

module.exports = router;
