const Posts = require("../../model/posts");

// find all posts
const findAllPosts = async () => {
  return await Posts.find({});
};

// find all posts that was authored by "GoodGuyGreg"
const allFromGoodGuyGreg = async () => {
  return await Posts.find({ username: "GoodGuyGreg" });
};

// find all posts that was authored by "ScumbagSteve"
const allFromScumbagSteve = async () => {
  return await Posts.find({ username: "ScumbagSteve" });
};
