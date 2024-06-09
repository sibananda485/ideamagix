const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  date: { type: Date, required: true },
  batch: { type: Schema.Types.ObjectId, ref: "batch" },
  course: { type: Schema.Types.ObjectId, ref: "course" },
  instructors: {
    type: Schema.Types.ObjectId,
    ref: "instructor",
  },
});

module.exports = mongoose.model("schedule", ScheduleSchema);
