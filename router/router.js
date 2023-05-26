const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

// go to logic 
router.get("/", function (req, res) {
  res.send("Helloworld");
})

router.get("/testjson", new Endpoint().getApiEndpoint);

router.post("/login", new Endpoint().loginEndpoint);

router.post("/register", new Endpoint().registerEndpoint);

router.get("/profile" ,new Endpoint().profileEndpoint);

router.post("/forgetpwd", new Endpoint().forgetpwdEndpoint);

module.exports = router;
