const { Router } = require("express");

const { projectModel } = require("../Models/project.module");

const projectController = Router();

projectController.get("/", async (req, res) => {
 
  const project = await projectModel.find({
    userId: req.body.userId,
 
  });
  res.send(project);
});

projectController.get("/:id", async (req, res) => {
  const {id} = req.params
  const project = await projectModel.find({
    userId: req.body.userId,
    _id:id
  });
  res.send(project);
});

projectController.post("/create", async (req, res) => {
  const { name, client, desc,  userId } = req.body;

  const project = new projectModel({
    name,
    client,
    desc,
    userId 
  });
  try {
    await project.save();
    res.send("Project is created");
  } catch (err) {
    res.send("something went wrong");
  }
});

projectController.delete("/delete/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const deletedProject = await projectModel.findOneAndDelete({
    _id: projectId,
    userId: req.body.userId,
  });
  if (deletedProject) {
    res.status(200).send("project Deleted");
  } else {
    res.send("couldn't delete");
  }
});

projectController.patch("/edit/:projectId", async (req, res) => {
  const { projectId } = req.params;
  const updateProject= await projectModel.findOneAndUpdate(
    { _id: projectId, userId: req.body.userId },
    req.body
  );
  if (updateProject) {
    res.send(" Client Updated successfully");
  } else {
    res.send("couldn't Update");
  }
});

module.exports = {
    projectController,
};
