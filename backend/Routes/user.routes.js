
const {Router} = require("express");

require("dotenv").config()

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const { userModel} = require("../Models/user.module");
const userController = Router();

userController.post("/signup" , (req, res) =>{

    const {full_name,email, password} = req.body;

    bcrypt.hash(password, 5 , async function(err,hash){
       if(err){
        res.send("something went wrong")
       }

       const user = new userModel({
            full_name,
            email,
            password : hash
          
       })
       try{
        await user.save()
        res.json({msg : "Signup successfull"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({"message":"Uesr already exists! please try another "})
        // res.send("Something went wrong, plz try again")
    }
    })
})

userController.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email})
    const hash = user.password
    bcrypt.compare(password, hash, function(err, result) {
        if(err){
            res.send("Something went wrong, plz try again later")
        }
        if(result){
            const token = jwt.sign({ userId : user._id }, process.env.JWT_SECRET);
            res.json({message : "Login successfull", token})
        }
        else{
            res.send("Invalid credentials, plz signup if you haven't")
        }
    });
    
})

module.exports = {
    userController
}