const Student = require("../../model/student");

// delete the student where name set to "Ido"
const deleteIdo = async () => {
  try {
    await Student.deleteMany({ name: "Ido" });
    return "deleted";
  } catch (error) {
    return false;
  }
};

// delete the student where date set to "02/04/1998"
const deleteBornIn02041998 = async () => {
  try {
    await Student.deleteMany({ birth: new Date("1998/04/02Z") });
    return "deleted";
  } catch (error) {
    return false;
  }
};
