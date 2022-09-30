

const mongoose = require("mongoose");


const teamMemberSchema = new mongoose.Schema({
    
    name : {type:String, required:true},
    email: {type:String, required: true},
    note: String,
    role:{type:String, required: true},
    laborRate:Number ,
    billableRate:Number ,
    userId : {type : String, required : true}
})

const teamMemberModel = mongoose.model("TeamMember", teamMemberSchema )

module.exports={
    teamMemberModel
}