const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  methods: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/cvisfeed")
  .then(console.log("mongo connected "))
  .catch((e) => {
    console.log(e);
  });

const userFeed = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  rating: { type: Number },
  likeMost: { type: String },
  Improve: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const feedback = mongoose.model("feedback", userFeed);

app.post("/feedback", async (req, res) => {
  try {
    console.log(req.body);
    await feedback.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      rating: req.body.rating,
      likeMost: req.body.likeMost,
      Improve: req.body.Improve,
    });
    console.log(req.body);

    res.status(201).send("added data");
  } catch (e) {
    console.log(e);
    res.status(402).send("posting error");
  }
});

app.get("/feedbackthree", async (req, res) => {
  try {
    const latestfeed = await feedback.find().sort({ createdAt: -1 }).limit(3);

    res.status(200).json(latestfeed);
  } catch (e) {
    console.log(e);
    res.status(500).send("error to fetch ...");
  }
});

const userContact = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  country: { type: String },
  phone: { type: String },
  message: { type: String },
});

//CONTACT US

const contact = mongoose.model("contact", userContact);

app.post("/contact", async (req, res) => {
  try {
    console.log(req.body);
    await contact.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      phone: req.body.phone,
      message: req.body.message,
    });
    console.log(req.body);

    res.status(201).send("added data");
  } catch (e) {
    console.log(e);
    res.status(402).send("posting error");
  }
});

app.listen(5000, () => {
  console.log("running server  ...");
});
