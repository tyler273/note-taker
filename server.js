// Dependencies
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3005;
const app = express();
// Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// GET route for homepage
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

// GET route for notes
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})

app.listen(PORT,() => {
    console.log(`i am on port ${PORT}`);
})