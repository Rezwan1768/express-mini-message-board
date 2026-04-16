const query = require("./pool");

async function getAllMessages() {
  const result = await query("SELECT * FROM messages");
  return result.rows;
}

async function getMessage(id) {
  const result = await query("SELECT * FROM messages WHERE id = $1", [id]);
  return result.rows[0];
}

async function createMessage(username, message) {
  const result = await query(
    "INSERT INTO messages (username, text) VALUES($1, $2) RETURNING *",
    [username, message]);
  return result.rows[0];
}

module.exports = {
  getAllMessages,
  getMessage,
  createMessage,
}