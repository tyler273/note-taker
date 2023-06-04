// Dependencies
const express = require('express');
const routes = require("./routes");
const PORT = process.env.PORT || 3005;
const app = express();
// Middleware
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.use(routes);

app.listen(PORT,() => {
    console.log(`i am on port ${PORT}`);
})