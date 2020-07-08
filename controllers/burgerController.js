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
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne(req.body, function (result, err) {
    if (err) {
      console.log(`Error at post`);
    }
    res.json({ newBurger: result.burger });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  let updateId = { id: req.params.id };
  let devoured = { devoured: req.body.devoured };
  burger.updateOne(devoured, updateId, function (result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
  });
  res.status(200).end();
});

module.exports = router;
