const express = require("express");
const router = express.Router();
const  {createTodo}  = require("../controllers/createTodo");

// Middleware to parse JSON requests
router.use(express.json());

router.post("/createTodo", createTodo);

module.exports = router;
