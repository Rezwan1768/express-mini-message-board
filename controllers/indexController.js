const messages = require("../data/messages");
const links = require("../data/links");
const NotFoundError = require("../errors/NotFoundError")

function getMessages(req, res) {
  res.render("pages/index", {title: "Messages", links, messages});
}

function getMessageDetail(req, res) {
  const message = messages.find(
    (message) => message.user === req.params.name
  );

  if (!message) {
    throw new NotFoundError("Message not found");
  }

  res.render("pages/message-detail", { title: "Message Details", links, message });
}

function getNewMessageForm(req, res) {
  res.render("pages/form", {title: "Add Messages", links});
}

function createMessage(req, res) {
  const { name, message } = req.body;

  messages.push({
    user: name,
    text: message,
    added: new Date(),
  });

  res.redirect("/");
}

module.exports = {
  getMessages,
  getMessageDetail,
  getNewMessageForm,
  createMessage,
}