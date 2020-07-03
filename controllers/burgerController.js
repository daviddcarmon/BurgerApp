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

  router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger"], [req.body.name], function (result) {
      res.json({ newBurger: result.burger });
    });
  });

  router.put("/api/burgers/:id", function (req, res) {
    let updateId = burger.updateOne({ devoured: false }, updateId, function (
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
    });
    res.status(200).end();
  });
});

module.exports = router;
