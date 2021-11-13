const User = require("../../model/users");

// find all users
const findAllUsers = async () => {
  return await User.find({});
};
