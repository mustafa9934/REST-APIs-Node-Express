const express = require("express");
const app = express();
const PORT = 3001;
// testing nodemon functionality
const appRoutes = require("./routes/index");
app.use("/api/v1", appRoutes);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
