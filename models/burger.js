const orm = require("../config/orm.js");

// selectAll insertOne updateOne

let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (data) {
      cb(data);
    });
  },
  insertOne: function (val, cb) {
    orm.insertOne("burgers",val, function (data) {
      cb(data);
    });
  },
  updateOne: function (val, condition, cb) {
    orm.updateOne("burgers", val, condition, function (data) {
      cb(data);
    });
  },
};

module.exports = burger;
