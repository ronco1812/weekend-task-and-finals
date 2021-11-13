const Users = require("../model/users");
const buildUser = (username, first_name, last_name) => {
  return new Users({ username, first_name, last_name });
};

const greg = buildUser("GoodGuyGreg", "Good Guy", "Greg");
const steve = buildUser("ScumbagSteve", "Scumbag", "Steve");

Users.insertMany([greg, steve]).then(console.log(`inserted all users`));
