const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.LOCAL_DATABASE_URL,
  ssl: {
    ssl: {
      ca: fs.readFileSync("/etc/secrets/ca.pem").toString(),
      rejectUnauthorized: true,
    },
  }

});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;