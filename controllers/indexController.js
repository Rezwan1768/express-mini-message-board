const db = require("../db/queries");
// const messages = require("../data/messages");
const links = require("../data/links");
const NotFoundError = require("../errors/NotFoundError")

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("pages/index", {title: "Messages", links, messages});
}

async function getMessageDetail(req, res) {
  const message = await db.getMessage(Number(req.params.id));
  if (!message) {
    throw new NotFoundError("Message not found");
  }

  res.render("pages/message-detail", { title: "Message Details", links, message });
}

function getNewMessageForm(req, res) {
  res.render("pages/form", {title: "Add Messages", links});
}

async function createMessage(req, res) {
  const { username, message } = req.body;
  await db.createMessage(username, message);
  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessageDetail,
  getNewMessageForm,
  createMessage,
}