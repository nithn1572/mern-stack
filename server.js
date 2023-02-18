require("dotenv").config();
const userLib = require("./backend/lib/userLib");
const todoLib = require("./backend/lib/todoLib");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const port = process.env.PORT || 5010;
const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}

app.use(express.static("frontend"));

app.use(express.static("public",options));

app.get("/api/todos",function(req,res){
	res.json([
		{name:"nihtin",isCompleted:true},
		{name:"nihtin23",isCompleted:false}
	])
});
app.get("/", function(req, res){
	res.sendFile(__dirname+"/frontend/html/index.html");
});
app.get("/weather", function(req, res){
	res.sendFile(__dirname+"/frontend/html/weather.html");
});

app.get("/resume", function(req, res){
	res.sendFile(__dirname+"/frontend/html/resume.html");
});

app.get("/card", function(req, res){
	res.sendFile(__dirname+"/frontend/html/card.html");
});

app.get("/NeetCode", function(req, res){
	res.sendFile(__dirname+"/frontend/html/NeetCode.html");
});

app.get("/todo", function(req, res){
	res.sendFile(__dirname+"/frontend/html/todo.html");
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING,{},function (err){
	if(err){
		console.error(err);
	}
	else{
		console.log("DB Connected");
		// todoLib.deleteTodo({_id:'63f0e431355590721312ae06'},function(err,result){
		// 	if(err) console.error(err);
		// 	else console.log(result);
		// });

		// todoLib.updateTodoById({_id:'63f0e431355590721312ae06'},{isCompleted:false},function(err,result){
		// 	if(err) console.error(err);
		// 	else console.log(result);
		// })

		// todoLib.getTodoById({_id:'63f0e431355590721312ae06'},function(err,result){
		// 	if(err) console.eroor(err);
		// 	else console.log(result);
		// })

		// todoLib.getTodoByQuery({isCompleted:false,isDeleted:false},function(err,result){
		// 	if(err) console.error(err);
		// 	else console.log(result);
		// });

		// todoLib.getAllTodos(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// todoLib.createTodo({title: "diff todo"},function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// todoLib.createFirstTodo(function(err,res){
		// 	if(err){
		// 		console.eroor(err)
		// 	}
		// 	else{
		// 		console.log(res)
		// 	}
		// });

		// TODO: donot create user if atleast 1 user exist int the table
		// userLib.createFirstUser(function(err,res){
		// 	if(err){
		// 		// console.error(err);
		// 	}
		// 	else{
		// 		console.log(res);
		// 	}
		// });

		// userLib.createUser({userName: "nithin1572", yearOfGraduation: 2024},function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// userLib.updateUser(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// userLib.deleteUser("nithin1572",function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// userLib.getUserByFilter({userName: "nithin1572"}, function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });

		// userLib.getAllUsers(function(err,result){
		// 	if(err){
		// 		console.error(err);
		// 	}
		// 	else{
		// 		console.log(result);
		// 	}
		// });


		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
		
	}
});