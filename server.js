const express = require("express");

// const RecipeRouter = require("./recipes/recipeRouter");

const server = express();

server.use(express.json());
// server.use("/api/recipes", RecipeRouter);
server.get("*", (req, res) => {
  res.status(200).json("It's working");
});

module.exports = server;
