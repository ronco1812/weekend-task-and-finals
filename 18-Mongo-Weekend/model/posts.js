const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const PostsSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;
