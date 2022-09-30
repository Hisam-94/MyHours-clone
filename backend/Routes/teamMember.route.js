const { Router } = require("express");

const { teamMemberModel } = require("../Models/teamMembers.module");

const teamMemberController = Router();

teamMemberController.get("/", async (req, res) => {
  const { name } = req.query;
  const teamMember = await teamMemberModel.find({
    userId: req.body.userId,
    name,
  });
  res.send(teamMember);
});

teamMemberController.post("/create", async (req, res) => {
  const { name, email, note, role, laborRate, billableRate, userId } = req.body;

  const teamMember = new teamMemberModel({
    name,
    email,
    note,
    role,
    laborRate,
    billableRate,
    userId,
  });
  try {
    await teamMember.save();
    res.send("TeamMember is created");
  } catch (err) {
    res.send("something went wrong");
  }
});

teamMemberController.delete("/delete/:teammemberId", async (req, res) => {
  const { teammemberId } = req.params;
  const deletedTeamMember = await teamMemberModel.findOneAndDelete({
    _id: teammemberId,
    userId: req.body.userId,
  });
  if (deletedTeamMember) {
    res.status(200).send("TeamMember Deleted");
  } else {
    res.send("couldn't delete");
  }
});

teamMemberController.patch("/edit/:teammemberId", async (req, res) => {
  const { teammemberId } = req.params;
  const updateTeamMember = await teamMemberModel.findOneAndUpdate(
    { _id: teammemberId, userId: req.body.userId },
    req.body
  );
  if (updateTeamMember) {
    res.send(" TeamMember Updated successfully");
  } else {
    res.send("couldn't Update");
  }
});

module.exports = {
  teamMemberController,
};
