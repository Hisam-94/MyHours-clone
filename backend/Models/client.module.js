

const mongoose = require("mongoose");


const clientSchema = new mongoose.Schema({
    
    name : {type:String, required:true},
    contact_person: String,
    email: String,
    phone: Number,
    address:String,
    tax_name: String,
    tax_percentage: String,
    tax_number:Number ,
    userId : {type : String, required : true}
})

const clientModel = mongoose.model("Client", clientSchema )

module.exports={
    clientModel
}