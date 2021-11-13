const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
  },
  courses: [{ type: String }],
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
