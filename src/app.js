const express = require("express");
const publicRoutes = require("./routes/public.routes");
const protectedRoutes = require("./routes/protected.routes");
const app = express();

app.use(express.json());
app.use("/public", publicRoutes);
app.use("/protected", protectedRoutes);

module.exports = app;
