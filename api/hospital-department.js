const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

router.post("/", new Endpoint().addDepartment);

router.get("/", new Endpoint().getAllDepartmentEndpoint);

router.get("/:id", new Endpoint().getDepartmentByIdEndpoint);

router.put("/:id", new Endpoint().updateDepartmentByIdEndpoint);

router.delete("/:id", new Endpoint().deleteDepartmentByIdEndpoint);

module.exports = router;
