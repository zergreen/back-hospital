const express = require("express");
const router = express.Router();
const { Endpoint } = require("../controller/endpoint.js");

//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

//delete student
router.delete("/deleteStudent", new Endpoint().deleteStudentEndpoint);

//get student
router.get("/getStudent", new Endpoint().getStudentEndpoint);

//get student by id
router.get("/getUserStudent", new Endpoint().getUserStudentEndpoint);

//update student
router.put("/updateStudentName", new Endpoint().updateStudentNameEndpoint);
// router.put("/updateStudent/:id", new Endpoint().updateStudentEndpoint);

//add subject
router.post("/addSubject", new Endpoint().addSubjectEndpoint);

//add score
router.post("/addScore", new Endpoint().addScoreEndpoint);

//update score
router.put("/updateScore", new Endpoint().updateScoreEndpoint);

//update subject
router.put("/updateSubject", new Endpoint().updateSubjectEndpoint);

//mean
//router.get("/meanPoint", new Endpoint().meanPointEndpoint);

// router.get("/", function(req, res) {
//     res.render("homepage", { title: "I just code IT [Youtube Channel]" });
// })

router.get("/", function (req, res) {
  res.redirect("/getonlystudent");
});

router.get("/getonlystudent", new Endpoint().getonlystudentEndpoint);


// go to logic 
router.get("/home", function (req, res) {
  res.send("Helloworld");
})

router.get("/callapi", new Endpoint().getApiEndpoint);


module.exports = router;
