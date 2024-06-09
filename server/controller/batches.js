const Course = require("../models/courses");
const Batch = require("../models/batches");

const createBatch = async (req, res) => {
  try {
    const course = await Course.findById(req.body.courseId);
    if (!course) {
      return res.status(400).json({ message: "Course not found" });
    }
    const result = await Batch.create({
      batchName: req.body.batchName,
      totalStudents: req.body.totalStudents,
    });
    course.batches.push(result._id);
    await course.save();
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllBatch = async (req, res) => {
  try {
    const docs = await Batch.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.json(400).json(error);
  }
};

module.exports = { createBatch, getAllBatch };
