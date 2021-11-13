const Posts = require("../model/posts");

const buildPost = (username, title, body) => {
  return new Posts({ username, title, body });
};

const first = buildPost(
  "GoodGuyGreg",
  "Passes out at party",
  "Wakes up early and cleans house"
);
const second = buildPost(
  "GoodGuyGreg",
  "Steals your identity",
  "Raises your credit score"
);
const third = buildPost(
  "GoodGuyGreg",
  "Reports a bug in your code",
  "Sends you a Pull Request"
);
const fourth = buildPost("ScumbagSteve", "Borrows something", "Sells it");
const fifth = buildPost("ScumbagSteve", "Borrows everything", "The end");
const sixth = buildPost(
  "ScumbagSteve",
  "Forks your repo on github",
  "Sets to private"
);

Posts.insertMany([first, second, third, fourth, fifth, sixth]).then(
  console.log(`inserted all posts`)
);
