require('dotenv').config();
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);


app.use((req, res, next) => {
  res.status(404).send("Page not found");
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
  if(error){
    console.log(error);
  }

  console.log(`Listening on port:${PORT}`);
});