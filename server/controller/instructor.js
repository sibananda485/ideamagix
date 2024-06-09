const Instructor = require("../models/instructor");

const createInstructor = async (req, res) => {
  try {
    const existingInstructor = await Instructor.find({ email: req.body.email });
    if (existingInstructor?.length >= 1) {
      return res.status(400).json({ message: "Instructor exists" });
    }
    const result = await Instructor.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllInstructor = async (req, res) => {
  try {
    const docs = await Instructor.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.json(400).json(error);
  }
};

module.exports = { createInstructor, getAllInstructor };
