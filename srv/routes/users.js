var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

/* GET users listing. */
router.get("/", function (req, res, next) {
  mongoose.connect(
    "mongodb://mongo:27017/currentCV",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      var collection = db.collection("getFromHere");
      collection.find().toArray(function (err, kittens) {
        res.send(kittens[0]);
      });
    }
  );
});


router.post("/add", function (req, res, next) {
  console.log(req.body);
  mongoose.connect(
    "mongodb://mongo:27017/currentCV",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, db) => {
      var collection = db.collection("getFromHere");
      collection.replaceOne(
        {},
        {
          key: 2,
          content:req.body.textInside
        }
      ).then(
        () => res.send("operation has been terminated")
      );
    }
  );
});


module.exports = router;
