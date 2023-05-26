const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataStudent = models.dataStudentModel;
    this.dataSubject = models.dataSubjectModel;
    this.dataScore = models.dataScoreModel;
    this.dataMean = models.meanPointModel;
  }

  createStudentEndpoint = (req, res) => {
    this.dataStudent.student_id = req.body.student_id;
    this.dataStudent.name = req.body.name;
    this.dataStudent.last_name = req.body.last_name;
    new Logic().createStudentLogic(this.dataStudent, res);
  };

  deleteStudentEndpoint = (req, res) => {
    this.dataStudent.student_id = req.body.student_id;
    new Logic().deleteStudentLogic(this.dataStudent, res);
  };

  getStudentEndpoint = (req, res) => {
    new Logic().getStudentLogic(res);
  };

  getUserStudentEndpoint = (req, res) => {
    this.dataStudent.student_id = req.body.student_id;
    new Logic().getUserStudentLogic(this.dataStudent, res);
  };

  updateStudentNameEndpoint = (req, res) => {
    this.dataStudent.student_id = req.body.student_id;
    this.dataStudent.name = req.body.student_name;
    this.dataStudent.last_name = req.body.student_lastname;
    new Logic().updateStudentLogic(this.dataStudent, res);
  };

  addSubjectEndpoint = (req, res) => {
    this.dataSubject.subject_id = req.body.subject_id;
    this.dataSubject.subject_name = req.body.subject_name;
    this.dataSubject.teacher_name = req.body.teacher_name;
    new Logic().addSubjectLogic(this.dataSubject, res);
  };

  addScoreEndpoint = (req, res) => {
    this.dataScore.student_id = req.body.student_id;
    this.dataScore.subject_id = req.body.subject_id;
    this.dataScore.score = req.body.score;
    new Logic().addScoreLogic(this.dataScore, res);
  };

  updateScoreEndpoint = (req, res) => {
    this.dataScore.student_id = req.body.student_id;
    this.dataScore.subject_id = req.body.subject_id;
    this.dataScore.score = req.body.score;
    new Logic().updateScoreLogic(this.dataScore, res);
  };

  updateSubjectEndpoint = (req, res) => {
    this.dataSubject.subject_id = req.body.subject_id;
    this.dataSubject.subject_name = req.body.subject_name;
    this.dataSubject.teacher_name = req.body.teacher_name;
    new Logic().updateSubjectLogic(this.dataSubject, res);
  };

  // meanPointEndpoint = (req, res) => {
  //     this.dataMean.subject_name = req.body.subject_name;
  //     new Logic().meanPointLogic(this.dataMean, res);
  // }

  getonlystudentEndpoint = (req, res) => {
    new Logic().getonlystudentLogic(req, res);
  };

  // get api
  getApiEndpoint = (req, res) => {
    new Logic().getApiLogic(req, res)
  }
}
module.exports = {
  Endpoint,
};
