const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

router.get("/notes", (req, res) => res.json(db));
router.post("/notes", (req, res) => {
    
});