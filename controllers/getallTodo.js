const Todo=require("../models/Todoschema");

exports.getallTodo=async(req,res)=>{
    try{

        // fetch all data from the database using mongoose library function .find which apply on model Todo.
        const Alltodos=await Todo.find({});
        // console.log(Alltodos);
        res.status(200)
        .json({
            success:true,
            data:Alltodos,
            message:"You fetch all data successfully"
            
        })
          
    }
    catch(err){

        console.log(err);
        console.error(err);
        res.status(500)
        .json({
            success:false,
            message:err.message

        })

    }

}