const Student = require("../model/students");
const buildStudent = (name, surName, date, phone, gender, courses) => {
  const birth = new Date(
    `${date.split("/")[2]}/${date.split("/")[1]}/${date.split("/")[0]}Z`
  );
  return new Student({ name, surName, birth, phone, gender, courses });
};
const ido = buildStudent("Ido", "Arbel", "26/01/1998", "0526305421", "Male", [
  "Java",
  "Math",
]);

const chen = buildStudent(
  "Chen",
  "Halevi",
  "11/03/1997",
  "0526323421",
  "Male",
  ["Math", "Law"]
);

const koren = buildStudent(
  "Koren",
  "Gan-or",
  "19/01/1997",
  "0526305321",
  "male",
  ["JavaScript", "Finance", "Law"]
);

const oryan = buildStudent(
  "Oryan",
  "Levy",
  "02/04/1998",
  "0542305321",
  "Male",
  ["JavaScript", "Law"]
);

const yahalom = buildStudent(
  "Yahalom",
  "Cohen",
  "03/11/1993",
  "0542305392",
  "Female",
  ["Java", "Law"]
);

Student.insertMany([ido, chen, koren, oryan, yahalom]).then((result) => {
  console.log(`inserted all students`);
});
