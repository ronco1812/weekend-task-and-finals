const Student = require("../../model/student");

//  find all students that have a name that contains the letter "o"
const findAllWithO = async () => {
  return await Student.find({ name: /o/ });
};

// find all students that have a surName that contains the letter "h" or "y"
const findAllSurNameWithHOrY = async () => {
  return await Student.find({ $or: [{ surName: /h/ }, { surName: /y/ }] });
};
