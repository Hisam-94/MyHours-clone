

const mongoose = require("mongoose");


const teamSchema = new mongoose.Schema({
    
    name : {type:String, required:true},
    userId : {type : String, required : true}
})

const teamModel = mongoose.model("Team", teamSchema )

module.exports={
    teamModel
}