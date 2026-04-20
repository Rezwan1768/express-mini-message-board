const { body, validationResult } = require('express-validator');
const db = require("../db/queries");
const links = require("../data/links");
const HttpError = require("../errors/HttpError")

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("pages/index", { title: "Messages", links, messages });
}

async function getMessageDetail(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      throw new HttpError("Invalid message ID", 400);
    }

    const message = await db.getMessage(id);
    if (!message) {
      throw new HttpError("Message not found", 404);
    }

    res.render("pages/message-detail", { title: "Message Details", links, message });
  } catch (err) {
    next(err);
  }
}

function getNewMessageForm(req, res) {
  res.render("pages/form", {
    title: "Add Messages",
    links,
    errors: [],
    old: { username: "", message: "" },
  });
}


const validateMessage = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username field can't be empty."),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message field can't be empty."),
];

async function createMessage(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("pages/form", {
        title: "Add Messages",
        links,
        errors: errors.array(),
        old: req.body,
      });
    }

    const { username, message } = req.body;
    await db.createMessage(username, message);

    res.redirect("/");
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getMessages,
  getMessageDetail,
  getNewMessageForm,
  validateMessage,
  createMessage,
}