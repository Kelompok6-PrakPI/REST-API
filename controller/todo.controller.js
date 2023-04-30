const Todo = require('../models/todo')

module.exports = {    
    getAllTodo: async (req, res) => {
        try{
           const todo = await Todo.find()
           if (todo.length === 0) {
                res.status(404).json({
                    status: 404,
                    message: "No todos found"
            })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Todo has been found successfully",
                    data: todo
                })
            }
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },
    getTodoByID: async (req, res) => {
        try{
            const { id } = req.params 
            const todo = await Todo.findById(id)
            
            if (!todo) {
                res.status(404).json({
                    status: 404,
                    message: `Todo with id ${id} is not found`
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Todo has been found successfully",
                    data: todo
                })
            }
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },

    deleteTodoByID: async (req, res) => {
        try{
            const { id } = req.params
            const deletedTodo = await Todo.findByIdAndDelete(id);
    
            if (!deletedTodo) {
                res.status(404).json({
                    status: 404,
                    message: `Todo with id ${id} is not found`
                })
            } else {
                res.status(200).json({
                    status: 200,
                    message: "Todo has been deleted",
                    data: deletedTodo
                })
            }
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },

    addTodo: async (req, res) => {
        try{
            const { name,deadline,isDone } = req.body 
                
            const todo = await Todo.create({
                name,
                deadline,
                isDone
            })

            res.status(201).json({
                status:201,
                message: "todo has been created",
                data : todo
            })
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
       
    },
    updateTodoByID: async (req, res) => {
        try{
            const { id } = req.params
            const updated = req.body

            const result = await Todo.findByIdAndUpdate(id, updated)
            
            if (!result) {
                return res.status(404).json({
                    status: 404,
                    message: `Todo with id ${id} is not found`
                });
            }

            const updatedTodo = await Todo.findById(id)
            res.status(200).json({
                message:"todo has been updated",
                data : updatedTodo
            })
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    },    
    deleteAllTodo: async (req, res) => {
        try{
            const todo = await Todo.deleteMany()

            if (todo.length > 0) {
                res.status(200).json({
                    status: 200,
                    message: "All todos has been deleted"
                });
            } else {
                res.status(404).json({
                    status: 404,
                    message: "No todo found"
                });
            }
        }catch(err){
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    }
}
