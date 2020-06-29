const orm = require("../config/orm.js");

// selectAll insertOne updateOne

let burger = {
  all: (cb) => {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },
  insertOne: function (cols, val, cb) {
    orm.insertOne("burgers", cols, val, function (data) {
      cb(data);
    });
  },
  updateOne: function (val, condition, cb) {
    orm.updateOne("burgers", val, condition, function (data) {
      cb(data);
    });
  },
};
