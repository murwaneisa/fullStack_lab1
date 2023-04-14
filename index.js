const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const musicRoutes = require("./routes/music");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URL = process.env.URL;
mongoose
  .connect(URL, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.use("/api/albums", musicRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
