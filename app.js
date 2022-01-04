require("./db/connect");
const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const tasks = require("./routes/tasks");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//routes
app.get("/hello", (req, res) => {
  res.send(`Task Manager App`);
});

app.use("/api/v1/tasks", tasks);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Failed to connect to DB...");
    console.log("Server shutting down...");
  }
};

start();
