const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ssl: {
      ca: fs.readFileSync("/etc/secrets/ca.pem").toString(),
    },
  }

});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;