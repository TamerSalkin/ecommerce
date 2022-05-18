const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received", total);

  response.status(201).send();
});

// Listen command
exports.api = functions.https.onRequest(app);
