

const {Router} = require("express");

const {teamModel} = require("../Models/team.module");

const teamController =  Router();

teamController.get("/", async (req, res) => {
   
    const team = await teamModel.find({ userId: req.body.userId });
    res.send(team);
  });

  teamController.get("/:id", async (req, res) => {
    const {id} = req.params
    const team = await teamModel.find({
      userId: req.body.userId,
      _id:id
    });
    res.send(team);
  });

teamController.post("/create" , async(req,res) =>{
     const {name,  userId} = req.body;

     const team = new teamModel({
        name,
        userId
     })
     try {
        await team.save();
        res.send("team is created");
      } catch (err) {
        res.send("something went wrong");
      }
})

teamController.delete("/delete/:teamId", async (req, res) => {
    const { teamId } = req.params;
    const deletedTeam = await teamModel.findOneAndDelete({
      _id: teamId,
      userId: req.body.userId,
    });
    if (deletedTeam) {
      res.status(200).send("team Deleted");
    } else {
      res.send("couldn't delete");
    }
  });

teamController.patch("/edit/:teamId", async (req, res) => {
    const { teamId } = req.params;
    const updateTeam = await teamModel.findOneAndUpdate(
      { _id: teamId, userId: req.body.userId },
      req.body
    );
    if (updateTeam) {
      res.send(" Team Updated successfully");
    } else {
      res.send("couldn't Update");
    }
  });

module.exports = {
    teamController
}