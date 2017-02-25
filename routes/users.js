"use strict";

const express = require('express');
const router = express.Router();

/* GET users listing. */

module.exports = (knex) => {
  router.get("/", (req, res) => {
    knex("users").select("*")
      .then((results) => {
        res.json(results);
    });
  });
  return router;
}

