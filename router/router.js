const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

// go to logic 
router.get("/", function (req, res) {
  res.send("Helloworld");
})

router.get("/testjson", new Endpoint().getApiEndpoint);

router.post("/department", new Endpoint().addDepartment);

router.get("/department", new Endpoint().getAllDepartmentEndpoint);

router.get("/department/:id", new Endpoint().getDepartmentByIdEndpoint);

router.put("/department/:id", new Endpoint().updateDepartmentByIdEndpoint);

router.delete("/department/:id", new Endpoint().deleteDepartmentByIdEndpoint);


module.exports = router;
