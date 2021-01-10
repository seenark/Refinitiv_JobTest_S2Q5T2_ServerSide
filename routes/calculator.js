var express = require("express");
var router = express.Router();
const redis = require("redis");
const redisClient = redis.createClient(); // default port 6379

router.post("/save", (req, res, next) => {
  const name = req.body.name;
  const data = req.body.data;
  console.log("name", name);
  console.log("data", data);
  redisClient.setex(name, 360, JSON.stringify(data));
  res.send("saved");
});

router.get("/load/:name", async (req, res, next) => {
  const name = req.params.name;
  console.log("name", name);
  redisClient.get(name, (error, data) => {
    console.log("found", data);
    res.send(data);
  });
  res.send(JSON.parse(data));
});

module.exports = router;
