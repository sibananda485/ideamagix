const Course = require("../models/courses");

const createCourse = async (req, res) => {
  try {
    const result = await Course.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllCourse = async (req, res) => {
  try {
    let docs = await Course.find({}).populate("batches");
    res.status(200).json(docs);
  } catch (error) {
    res.json(400).json(error);
  }
};

module.exports = { createCourse, getAllCourse };
