const { Pool } = require("pg");
const fs = require("fs");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ca: fs.readFileSync("./certs/ca.pem").toString(),
  },
});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;