const Todo = require("../models/Todoschema");

exports.getallTodo = async (req, res) => {
    try {

        // fetch all data from the database using mongoose library function .find which apply on model Todo.
        const Alltodos = await Todo.find({});
        // console.log(Alltodos);
        res.status(200)
            .json({
                success: true,
                data: Alltodos,
                message: "You fetch all data successfully"

            })

    }
    catch (err) {

        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                success: false,
                message: err.message

            })

    }

}

exports.getTodobyid = async (req, res) => {
    try {

        // fetch all data from the database using mongoose library function .find which apply on model Todo.
        const id=req.params.id;
        const todobyid = await Todo.findById({_id:id});
        
        // if id not found
        if(!Todo){
            return res.status(404).json({
                success:false,
                message:"your data for this id not found"
            })
        }
        else{
            res.status(200)
            .json({
                success: true,
                data: todobyid,
                message: `You fetch data by id = ${id} successfully`

            })

        }
       

    }
    catch (err) {

        console.log(err);
        console.error(err);
        res.status(500)
            .json({
                success: false,
                message: err.message

            })

    }
}