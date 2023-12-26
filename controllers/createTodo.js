// Import the Todo model from the "../models/Todo" file
const Todo = require("../models/Todoschema");

// Define an asynchronous function named "createtodo"
exports.createTodo = async (req, res) => {
  try {
    // Extract the "title" and "description" from the request's body
    const { title, description } = req.body;

    // Create a new Todo object and insert it into the database using the Todo model
    const response = await Todo.create({ title, description });

    // Respond with a success status, the created data, and a success message
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    // Handle errors by logging them and responding with an error status and message
    console.log(err);
    console.error(err);
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
