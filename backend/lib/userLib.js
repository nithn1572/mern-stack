const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback) {
    try {
        var users = await userModel.find({});
        callback(null, users);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.createFirstUser = async function(callback) {
    try {
        var user = {
            userName: "nithin1572",
            yearOfGraduation: 2024,
        };
        var newUser = new userModel(user);
        var result = await newUser.save();
        callback(null, result);
    } catch (err) {
        callback(err, null);
    }
}

module.exports.updateUser = async function(callback){
    try{
        var query = {
            userName : "nithin1572",
        };
        var data = {
            yearOfGraduation : 2030,
        };
        var result = await userModel.updateOne(query,data);
        callback(null,result);
    }
    catch(err){
        callback(err,null);
    }
}