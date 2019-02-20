const express = require("express");

const port = process.env.PORT || 3000;
let app = express();

app.use(express.static("dist"));
app.listen(port, () => {
  console.log(`App listen to port: ${port}`);
});
