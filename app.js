const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Index");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
