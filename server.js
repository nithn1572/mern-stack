require('dotenv').config();
const userLib = require("./backend/lib/userLib");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5010;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/resume', function(req, res) {
    res.sendFile(__dirname + '/resume.html');
});
app.get('/card', function(req, res) {
    res.sendFile(__dirname + '/card.html');
});
app.get('/neetCode', function(req, res) {
    res.sendFile(__dirname + '/NeetCode.html');
});
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database');
        // userLib.getAllUsers(function(err, usersList) {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         if (usersList.length === 0) {
        //             userLib.createFirstUser(function(err, res) {
        //                 if (err) {
        //                     console.error(err);
        //                 } else {
        //                     console.log(res);
        //                 }
        //             });
        //         }
        //     }
        // });
        userLib.updateUser(function(err,result){
            if(err){
                console.error(err);
            }
            else{
                console.log(result);
            }
        });
        app.listen(port, function() {
            console.log('Server started on port ' + port);
        });
    }
});