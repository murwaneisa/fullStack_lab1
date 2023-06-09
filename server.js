const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const musicRoutes = require("./routes/music");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URL = process.env.URL;
mongoose
  .connect(URL, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/albums", musicRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
