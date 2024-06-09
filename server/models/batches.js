const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BatcheSchema = new Schema({
  batchName: { type: String, required: true },
  totalStudents: {
    type: Number,
    required: true,
    min: [0, "can't be less than 0"],
    max: [100, "beyond the max capacity"],
  },
});

module.exports = mongoose.model("batch", BatcheSchema);
