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
  const findSongInAlbum = await musics.find({ title: req.params.title });
  console.log(findSongInAlbum)

  if (findSongInAlbum.length > 0) {
    return res.status(400).send({ message: "song already exists" });
  }

  /*   try {
    const newMusicAlbum = new musics({ title, artist, year: new Date(year) });
    const savedMusicAlbum = await newMusicAlbum.save();
    res.json(savedMusicAlbum);
  } catch (error) {
    console.log("error to add album", error);
    res.status(500).send({ message: "server error" });
  } */
});

router.get("/:title", async (req, res) => {
  console.log("first", req.params.title);
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

module.exports = router;
