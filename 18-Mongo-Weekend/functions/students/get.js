const Student = require("../../model/student");

// get all students
const getAllStudents = async () => {
  return await Student.find({});
};

// get all students with name set to "Ido"
const getAllIdo = async () => {
  return await Student.find({ name: "Ido" });
};

// get all students where courses include "Law"
const getAllLawStudents = async () => {
  return await Student.find({ courses: "Law" });
};

// get all students where courses include "Java" and gender set to "Female"
const getAllFemaleJavaStudents = async () => {
  return await Student.find({
    $and: [{ courses: "Java" }, { gender: "Female" }],
  });
};

// get all students where birth > 05/05/1998
const getAllChildren = async () => {
  return await Student.find({ birth: { $gt: new Date("1998/05/05Z") } });
};

// get all students where phone starts with 054
const getAllStudentsWith054 = async () => {
  return await Student.find({ phone: /^054/ });
};
