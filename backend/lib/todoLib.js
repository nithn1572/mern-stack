const todoModel = require("../models/todoModel");
/*
1. createTodo
2. getAllTodos
3. getSingleTodoById
4. getTodosByQuery
5. updateTodoById
6. DeleteTodoById
*/
module.exports.createFirstTodo = async function(callback){
    try{
        var todo = {
            title: "first todo",
        };
        var newTodo = new todoModel(todo);
        var result = await newTodo.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.createTodo = async function(todo,callback){
    try{
        var newTodo = new todoModel(todo);
        var result = await newTodo.save();
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
module.exports.getAllTodos = async function(callback){
    try{
        var todos = await todoModel.find({isDeleted:false, isCompleted:false});
        callback(null,todos);
    }
    catch(err){
        callback(err,null)
    }
}

module.exports.getTodoByQuery = async function(query,callback){
    try{
        var todo = await todoModel.find(query);
        callback(null,todo);
    }
    catch(err){
        callback(err,null);
    }
}

module.exports.deleteTodo = async function(id,callback){
    try{
        var query = {
            _id: id,
        };
        var result = await todoModel.updateOne(query,{isDeleted: true});
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}
// module.exports.getTodoById = async function(id,callback){
//     try{
//         var todo = todoModel.find(id);
//         callback(null,todo)
//     }
//     catch(err){
//         callback(err,null)
//     }
// }
// module.exports.updateTodoById = async function(id,data,callback){
//     try{
//         var todo = {
//             _id : id,
//         };
//         var result = await todoModel.updateOne(todo,data);
//         callback(null,result);
//     }
//     catch(err){
//         callback(err,null)
//     }
// }


