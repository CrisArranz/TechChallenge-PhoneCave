require("dotenv").config();
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");

const app = express();
app.use(logger("dev"));

const routes = require("./config/routes.config");
app.use("/", routes);

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  const data = {};
  data.message = error.message;
  res.status(error.status || 500).json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`App running in port ${port}`))