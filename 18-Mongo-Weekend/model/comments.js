const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const CommentsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  post: {
    type: Object,
    required: true,
  },
});

const Comments = mongoose.model("Comments", CommentsSchema);
module.exports = Comments;
