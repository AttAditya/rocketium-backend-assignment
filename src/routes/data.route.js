const express = require('express');
const dataController = require('../controllers/data.controller');

const dataRouter = express.Router();

dataRouter.get("/", dataController.getAll);
dataRouter.get("/:id", dataController.getItem);
dataRouter.post("/", dataController.createItem);
dataRouter.put("/:id", dataController.updateItem);
dataRouter.delete("/:id", dataController.deleteItem);

module.exports = dataRouter;