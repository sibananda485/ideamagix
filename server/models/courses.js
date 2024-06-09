const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  level: { type: String, required: true },
  batches: { type: [Schema.Types.ObjectId], ref: "batch", default: [] },
});

module.exports = mongoose.model("course", CourseSchema);
