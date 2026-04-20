const {Client} = require("pg");


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255) NOT NULL CHECK(username <> ''),
  text TEXT NOT NULL CHECK(text <> ''),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
  
TRUNCATE messages RESTART IDENTITY;
INSERT INTO messages (text, username) 
VALUES 
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;


async function main() {
  console.log("seeding...");

  const connectionString = process.argv[2]
  if(!connectionString) {
    console.error("Please provide a database URL");
    process.exit(1);
  }

  const client = new Client({
    connectionString,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  
  try {
    await client.connect();
    await client.query(SQL);
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }

  console.log("done");
}

main();