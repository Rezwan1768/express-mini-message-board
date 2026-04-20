const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ca: fs.readFileSync(
    path.join(__dirname, "../certs/ca.pem")
  ).toString(),
});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;