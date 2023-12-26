const Todo=require("../models/Todoschema");

// update is a put type request
exports.updateTodo=async(req,res)=>{
    try{

        // const {id}=req.params;    // by destructuring 
        const id=req.params.id;   // both have same works

        const {title,description}=req.body;
        const fncup=await Todo.findByIdAndUpdate({_id:id},
            {
                title,description,updatedate:Date.now()
            })

            res.status(200).json({
                success:true,
                data:fncup,
                message:`your data will successfully updated in id= ${id}`

            })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                success: false,
                message: err.message

            })

    }
}