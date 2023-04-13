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

/* app.get("/albums", (req, res) => {
  try {
    const musicSchema = new musicSchema.find();
    res.json(musicSchema);
  } catch (error) {
    res.status(500).send({ message: "error to get music albums" });
  }
});

app.get("/albums/:name", (req, res) => {
  try {
    const music = new musicSchema.find({ name: req.params.name });
    if (music.length > 0) {
      res.status(201).json(music);
    } else {
      res.status(404).send({ message: "music album not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "error to get music albums" });
  }
});

 */

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
