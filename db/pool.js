const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   ca: fs.readFileSync(
  //     path.join(__dirname, "../certs/ca.pem")
  //   ).toString(),
  //   rejectUnauthorized: true,
  // }
  ssl: {
    rejectUnauthorized: false,
  },
});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;