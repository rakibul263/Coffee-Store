const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.08bzjfv.mongodb.net/?appName=Cluster0`;

app.get("/", (req, res) => {
  res.send("Coffee Server is running...");
});

app.listen(port, () => {
  console.log(`Coffee server is running port ${port}`);
});
