const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true

    },
    password:{
        type:String,
        require:true,
        unique:true
    }

});

const userModel = mongoose.model("user",schema);

module.exports = userModel;