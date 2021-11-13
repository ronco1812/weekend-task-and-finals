const Comments = require("../../model/comments");
const Posts = require("../../model/posts");

// find all comments
const findAllComments = async () => {
  return await Comments.find({});
};

// find all comments that was authored by "GoodGuyGreg"
const allFromGoodGuyGreg = async () => {
  return await Comments.find({ username: "GoodGuyGreg" });
};

// find all comments that was authored by "ScumbagSteve"
const allFromScumbagSteve = async () => {
  return await Comments.find({ username: "ScumbagSteve" });
};

// find all comments belonging to the post "Reports a bug in your code"
const findAllCommentsToThePost = async () => {
  const { _id } = await Posts.findOne({ title: "Reports a bug in your code" });
  return await Comments.find({post = _id})
};


