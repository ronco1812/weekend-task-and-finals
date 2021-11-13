const Student = require("../../model/student");

// add a JavaScript course to the students where name set to "Yahalom"
const addJSCourseToYahalom = async () => {
  try {
    const students = await Student.find({ name: "Yahalom" });
    students.forEach(async (student) => {
      const { courses } = student;
      courses.push("JavaScript");
      await Student.findOneAndUpdate({ phone: student.phone }, { courses });
    });
    return "updated";
  } catch (error) {
    return false;
  }
};
// update the birth to 02/12/1998 where name set to "Koren"
const updateKorenBD = async () => {
  try {
    await Student.updateMany(
      { name: "Koren" },
      { birth: new Date("1998/12/02Z") }
    );
    return "updated";
  } catch (error) {
    return false;
  }
};
