const express = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = express.Router();
const {
  getMessages, 
  getMessageDetail, 
  getNewMessageForm,
  validateMessage, 
  createMessage} = indexController;

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:id", getMessageDetail);
indexRouter.get("/new", getNewMessageForm);
indexRouter.post("/new", validateMessage, createMessage);

module.exports = indexRouter;
