const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
