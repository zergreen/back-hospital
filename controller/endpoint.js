const { Logic } = require("./logic");
const models = require("../model/model");

class Endpoint {
  constructor() {
    this.dataDepartment = models.departmentModel;
  }
  // get api
  getApiEndpoint = (req, res) => {
    new Logic().getApiLogic(req, res)
  }

  addDepartment = (req, res) => {
    // this.dataDepartment.Department_ID = req.body.Department_ID;
    // this.dataDepartment.Department_Name = req.body.Department_Name;
    new Logic().addDepartmentLogic(req, res);
  }

  getAllDepartmentEndpoint = (req, res) => {
    new Logic().getAllDepartmentLogic(req, res)
  }

  getDepartmentByIdEndpoint = (req, res) => {
    // Ex: id = 1
    new Logic().getDepartmentByIdLogic(req, res);
  }

  updateDepartmentByIdEndpoint = (req, res) => {
    new Logic().updateDepartmentByIdLogic(req, res);
  }

  deleteDepartmentByIdEndpoint = (req, res) => {
    new Logic().deleteDepartmentByIdLogic(req, res);
  }
  
}
module.exports = {
  Endpoint,
};
