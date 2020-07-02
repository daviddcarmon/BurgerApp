const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    console.log(data);
    let burgerList = {
      burgers: data,
    };
    // console.log(burgerList.burgers[0].burger);
    res.render("index", { burgers: data });
  });
});

module.exports = router;
