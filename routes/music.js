const express = require("express");
const router = express.Router();
const musics = require("../models/music_Album");

router.get("/", async (req, res) => {
  try {
    const musicAlbum = await musics.find();
    res.json(musicAlbum);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { title, artist, year } = req.body;
  if (!title || !artist) {
    return res.status(400).send({ message: "Please enter all fields" });
  }
  const findSongInAlbum = await musics.findOne({ title, artist });

  console.log(findSongInAlbum);

  if (findSongInAlbum) {
    return res.status(400).send({ message: "song already exists" });
  }

  try {
    const newMusicAlbum = new musics({
      title,
      artist,
      year: new Date(year).toISOString().slice(0, 10),
    });

    const savedMusicAlbum = await newMusicAlbum.save();
    res.json(savedMusicAlbum);
  } catch (error) {
    console.log("error to add album", error);
    res.status(500).send({ message: "server error" });
  }
});

router.get("/:title", async (req, res) => {
  try {
    const findMusic = await musics.find({ title: req.params.title });
    if (findMusic.length > 0) {
      res.status(201).json(findMusic);
    } else {
      res.status(404).send({ message: "music album not found" });
    }
  } catch (error) {
    console.log("error to get music albums", error);
    res.status(500).send({ message: "error to get music albums" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAlbum = await musics.findOneAndDelete({ _id: req.params.id });

    if (!deletedAlbum) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json({ message: "Album deleted successfully", album: deletedAlbum });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedAlbum = await musics.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!updatedAlbum) {
      return res.status(404).json({ error: "Album not found" });
    }

    res.json({ message: "Album updated successfully", album: updatedAlbum });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error for update" });
  }
});

module.exports = router;
