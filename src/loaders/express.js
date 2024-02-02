const express = require("express");
const cors = require("cors");
const CONFIG = require("../constants/config");

async function expressLoader(app) {
  app.use(
    cors({
      origin: CONFIG.CLIENT_URL,
      credentials: true,
      methods: "GET, POST",
      optionsSuccessStatus: 204,
    }),
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

module.exports = expressLoader;