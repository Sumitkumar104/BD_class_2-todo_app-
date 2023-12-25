// Import the mongoose library
const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Define a function named dbConnect
const dbConnect = () => {
  // Use mongoose to connect to the MongoDB database
  mongoose.connect(process.env.DATABASE_URL, {})

  // Attach a callback to the successful connection event
  .then(() => {
    console.log("Your mongoose connection will be established");
  })
  .catch((error)=>{
    console.log(" issue in db connection")
    console.error(error.message);
    process.exit(1);
                    
})
};

module.exports=dbConnect;
