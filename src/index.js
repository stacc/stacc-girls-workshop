const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Alt er opp å kjøyrer :)");
});

app.get("/healthz", (req, res) => {
  res.send("Alt ok her :)");
});

app.use("/api", require("./api"));

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port ${process.env.PORT || 4000}!`);
});
