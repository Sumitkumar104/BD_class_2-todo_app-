const express = require("express");
const router = express.Router();
const  {createTodo}  = require("../controllers/createTodo");
const {getallTodo,getTodobyid}=require("../controllers/getallTodo");
const {updateTodo}=require("../controllers/updateTodo");

// Middleware to parse JSON requests
router.use(express.json());

router.post("/createTodo", createTodo);
router.get("/getallTodo",getallTodo);
router.get("/getAllTodo/:id",getTodobyid);
router.put("/updateTodo/:id",updateTodo);

module.exports = router;
