const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

app.get("/", function(req, res){
	res.send("I Am Nihtin");
});

app.listen(port, function(){
	console.log("Server running on http://localhost:"+port);
	console.log(`Server running on http://localhost:${port}`);
});
