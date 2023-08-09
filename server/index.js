const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
