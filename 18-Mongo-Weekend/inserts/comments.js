const Comments = require("../model/comments");
const Posts = require("../model/posts");

const buildComment = (username, comment, post) => {
  return new Comments({ username, comment, post });
};

const getIDOfPost = async (title) => {
  const { _id } = await Posts.findOne({ title });
  return _id;
};
const insert = async (username, commentText, post) => {
  try {
    const _id = await getIDOfPost(post);
    const comment = buildComment(username, commentText, _id);
    await Comments.insertMany([comment]);
    return true;
  } catch (error) {
    return false;
  }
};
const insertAll = async () => {
  const firstComment = await insert(
    "GoodGuyGreg",
    "Hope you got a good deal!",
    "Borrows something"
  );
  const secondComment = await insert(
    "GoodGuyGreg",
    "What's mine is yours!",
    "Borrows everything"
  );
  const thirdComment = await insert(
    "GoodGuyGreg",
    "Don't violate the licensing agreement!",
    "Forks your repo on github"
  );
  const fourthComment = await insert(
    "ScumbagSteve",
    "It still isn't clean",
    "Passes out at party"
  );
  const fifthComment = await insert(
    "ScumbagSteve",
    "Denied your PR cause I found a hack",
    "Reports a bug in your code"
  );
  if (
    firstComment &&
    secondComment &&
    thirdComment &&
    fourthComment &&
    fifthComment
  ) {
    console.log(`inserted all comments`);
  } else console.log("L");
};
insertAll();
