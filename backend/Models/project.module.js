

const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({
    
    name : {type:String, required:true},
    client: String,
    desc: String,
    userId : {type : String, required : true}
})

const projectModel = mongoose.model("Project", projectSchema )

module.exports={
    projectModel
}