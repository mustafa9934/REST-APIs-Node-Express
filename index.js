const express = require("express");
const app = express();
const PORT = 3001;
// testing nodemon functionality
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
