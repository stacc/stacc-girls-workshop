const express = require("express");
const app = express();

app.get("/healthz", (req, res) => {
  res.send("Alt ok her :)");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000!");
});
