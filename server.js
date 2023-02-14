const express = require('express');
const app = express();
var path = require('path');//for css 
const port = process.env.PORT || 5010;
app.get("/", function(req, res){
	// res.send("I Am Nithin");
	res.sendFile(__dirname+"/index.html")
});
app.get("/resume", function(req, res){
	// res.send("I Am Nithin");
	res.sendFile(__dirname+"/resume.html")
});
app.use(express.static(path.join(__dirname+'MERN-STACK')));

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
