const { Router } = require("express");

const { clientModel } = require("../Models/client.module");

const clientController = Router();

clientController.get("/", async (req, res) => {
  const { name } = req.query;
  const client = await clientModel.find({
    userId: req.body.userId,
    name,
  });
  res.send(client);
});

clientController.post("/create", async (req, res) => {
  const { name, contact_person, email, phone, address, tax_name, tax_percentage, tax_number, userId } = req.body;

  const client = new clientModel({
    name,
    contact_person,
    email,
    phone,
    address,
    tax_name,
    tax_percentage,
    tax_number ,
    userId 
  });
  try {
    await client.save();
    res.send("Client is created");
  } catch (err) {
    res.send("something went wrong");
  }
});

clientController.delete("/delete/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const deletedClient = await clientModel.findOneAndDelete({
    _id: clientId,
    userId: req.body.userId,
  });
  if (deletedClient) {
    res.status(200).send("Client Deleted");
  } else {
    res.send("couldn't delete");
  }
});

clientController.patch("/edit/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const updateClient = await clientModel.findOneAndUpdate(
    { _id: clientId, userId: req.body.userId },
    req.body
  );
  if (updateClient) {
    res.send(" Client Updated successfully");
  } else {
    res.send("couldn't Update");
  }
});

module.exports = {
    clientController,
};
