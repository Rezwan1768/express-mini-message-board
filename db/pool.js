const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    ca: fs.readFileSync("/etc/secrets/ca.pem").toString(),
    rejectUnauthorized: true,
  }

});

function query(text, params) {
  return pool.query(text, params);
}

module.exports = query;