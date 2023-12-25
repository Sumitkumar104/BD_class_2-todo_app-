const mongoose=require('mongoose');
const todoscheme =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,

    },
    description:{
        type:String,
        required:true,
        maxLength:100,
    },
    createdat:{
        type:Date,
        required:true,
        default:Date.now(),

    },
    updatedat:{
        type:Date,
        required:true,
        default:Date.now(),
    }

})

// Create and export a Mongoose model named "Todo" based on the todoscheme schema. The mongoose.model() function is used to create a model. It takes two arguments: the model name ("Todo") and the schema (todoscheme). This model can then be used to interact with the MongoDB collection corresponding to "Todo" documents.
module.exports=mongoose.model("Todo",todoscheme);
// further it is used by controller .