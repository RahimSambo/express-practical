const express = require("express");

app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Server running successfully" });
});

app.listen(3000, () => {
  console.log(`My server is running on port 3000`);
});
