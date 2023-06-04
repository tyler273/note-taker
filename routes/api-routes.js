const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const uuid = require("../helpers/uuid");

router.get("/notes", (req, res) => res.json(db));
router.post("/notes", (req, res) => {

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save if title and text present
    const newNote = {
        title,
        text,
        id: uuid(),
    }
  }
});

module.exports = router;