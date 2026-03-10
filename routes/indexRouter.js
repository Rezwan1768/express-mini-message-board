const express = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = express.Router();
const {
  getMessages, 
  getMessageDetail, 
  getNewMessageForm, 
  createMessage} = indexController;

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:name", getMessageDetail);
indexRouter.get("/new", getNewMessageForm);
indexRouter.post("/new", createMessage);

module.exports = indexRouter;
