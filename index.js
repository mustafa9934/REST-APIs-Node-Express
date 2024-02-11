const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const connectDB = require("./config/db");

connectDB();

const appRoutes = require("./routes/index");
app.use("/api/v1", appRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
