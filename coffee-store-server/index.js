const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);

// logger
const logger = (req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
};

//  verify token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send({ message: "Forbidden" });
    }

    req.decoded = decoded;
    next();
  });
};

//mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.08bzjfv.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const db = client.db("coffeeDB");
    const coffeeCollection = db.collection("coffees");
    const userCollection = db.collection("users");

    console.log("MongoDB Connected Successfully!");

    // jwt api
    app.post("/jwt", (req, res) => {
      const user = req.body;

      if (!user.email)
        return res.status(400).send({ message: "Email required" });

      try {
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        });
        res.send({ success: true, token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
      }
    });

    // coffee api
    app.post("/coffees", async (req, res) => {
      const result = await coffeeCollection.insertOne(req.body);
      res.send(result);
    });

    app.get("/coffees", async (req, res) => {
      const result = await coffeeCollection.find().toArray();
      res.send(result);
    });

    app.get("/coffees/:id", async (req, res) => {
      const result = await coffeeCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.put("/coffee/:id", async (req, res) => {
      const result = await coffeeCollection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body },
        { upsert: true },
      );
      res.send(result);
    });

    app.delete("/coffees/:id", async (req, res) => {
      const result = await coffeeCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    // user api
    app.post("/users", async (req, res) => {
      const result = await userCollection.insertOne(req.body);
      res.send(result);
    });

    app.get("/users", logger, verifyToken, async (req, res) => {
      const email = req.decoded.email;

      if (!email) {
        return res.status(403).send({ message: "Forbidden access" });
      }

      const result = await userCollection.find().toArray();
      res.send(result);
    });

    app.patch("/users", async (req, res) => {
      const { email, lastSignInTime } = req.body;

      const result = await userCollection.updateOne(
        { email },
        { $set: { lastSignInTime } },
      );

      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const result = await userCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });
  } catch (error) {
    console.error(error);
  }
}
run();

// root api
app.get("/", (req, res) => {
  res.send("Coffee Server is running...");
});

app.listen(port, () => {
  console.log(`Coffee server is running on port ${port}`);
});
