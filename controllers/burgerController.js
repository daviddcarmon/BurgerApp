const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    let burgerList = {
      burgers: data,
    };
    console.log(burgerList);
    res.render("index", burgerList);
  });
});

module.exports = router;
