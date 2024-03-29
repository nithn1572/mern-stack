import { config } from "dotenv";
config();
import * as userLib from "./backend/lib/userLib.js";
import * as todoLib from "./backend/lib/todoLib.js";
import mongoose from "mongoose";
import express, { request } from "express";
const app = express();
const port = process.env.PORT || 5010;
const options = {
  extensions: [
    "htm",
    "html",
    "css",
    "js",
    "ico",
    "jpg",
    "jpeg",
    "png",
    "svg",
    "pdf",
  ],
  index: ["index.html"],
};
app.use(express.static("frontend"));
app.use(express.json());
app.use(express.static("public", options));
app.get("/api/todos", function (req, res) {
  todoLib.getAllTodos(function (err, todos) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: todos });
    }
  });
});
app.get("/api/todos/deleted", function (req, res) {
  todoLib.getAllDeletedTodos(function (err, todos) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: todos });
    }
  });
});
app.get("/api/todos/completed", function (req, res) {
  todoLib.getAllCompletedTodos(function (err, todos) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: todos });
    }
  });
});

app.post("/api/todos", function (req, res) {
  const todo = req.body;
  todoLib.createTodo(todo, function (err, dbtodo) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: dbtodo });
    }
  });
});

app.put("/api/todos/:todoid", function (req, res) {
  const todo = req.body;
  const todoid = req.params.todoid;
  todoLib.updateTodoById(todoid, todo, function (err, dbtodo) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: dbtodo });
    }
  });
});

app.delete("/api/todos/:todoid", function (req, res) {
  const todoid = req.params.todoid;
  todoLib.deleteTodoById(todoid, function (err, dbtodo) {
    if (err) {
      res.json({ status: "error", message: err, data: null });
    } else {
      res.json({ status: "success", data: dbtodo });
    }
  });
});

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/index.html");
});
//removed resume route
// app.get("/resume", function (req, res) {
//   res.sendFile(process.cwd() + "/frontend/html/resume.html");
// });

app.get("/CodeTrack", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/CodeTrack.html");
});
app.get("/cf", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/cf.html");
});

app.get("/card", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/card.html");
});
app.get("/weather", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/weather.html");
});
app.get("/todo", function (req, res) {
  res.sendFile(process.cwd() + "/frontend/html/todo.html");
});
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("DB Connected");

    // todoLib.createTodo({title: "nithin vp"}, function(err,res){
    // 	if(err){
    // 		console.error(err);
    // 	}
    // 	else{
    // 		console.log(res);
    // 	}
    // });
    // todoLib.getAllTodos(function(err,res){
    // 	if(err){
    // 		console.error(err);
    // 	}
    // 	else{
    // 		console.log(res);
    // 	}
    // });
    // todoLib.getSingleTodoById({title: "nithin vp"}, function(err,res){
    // 	if(err) console.error(err);
    // 	else console.log(res);
    // });

    // todoLib.getTodosByQuery({isCompleted: false, isDeleted: false}, function(err,res){
    // 	if(err){
    // 		console.error(err);
    // 	}
    // 	else{
    // 		console.log(res);
    // 	}
    // });
    // todoLib.updateTodoById()

    // TODO: donot create user if atleast 1 user exist int the table
    // userLib.createFirstUser(function(err,res){
    // 	if(err){
    // 		// console.error(err);
    // 	}
    // 	else{
    // 		console.log(res);
    // 	}
    // });
    // userLib.createUser({userName: "beingzero", yearOfGraduation: 2025},function(err,result){
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
    // userLib.deleteUser("Srikanth Reddy",function(err,result){
    // 	if(err){
    // 		console.error(err);
    // 	}
    // 	else{
    // 		console.log(result);
    // 	}
    // });
    // userLib.getUserByFilter({userName: "Srikanth Reddy"}, function(err,result){
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

    app.listen(port, function () {
      console.log("Server running on http://localhost:" + port);
      console.log(`Server running on http://localhost:${port}`);
    });
  }
});
