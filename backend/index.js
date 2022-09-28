const express = require("express");
require("dotenv").config()

const cors = require("cors")
const {connection} = require("./Config/db")
const {userController} = require("./Routes/user.routes")

const { authentication } = require("./Middlewares/authentication");

const app = express();
const PORT = process.env.PORT || 8080 ;
app.use(express.json());


app.get("/" , (req,res) =>{
    res.send("Welcome")
})

app.use(cors());
app.use("/user" , userController);
app.use(authentication)


app.listen(PORT, async()=>{

    try{
   await connection;
   console.log("connetcted to db")
    }
    catch(err){
console.log("Falied to connect to db")
    }
})