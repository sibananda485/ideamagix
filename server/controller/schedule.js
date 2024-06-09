const Schedule = require("../models/schedule");

const createSchedule = async (req, res) => {
  try {
    const docs = await Schedule.findOne({
      date: req.body.date,
      instructors: req.body.instructors,
    });
    if (docs) {
      let data = await Schedule.find({
        date: req.body.date,
        instructors: req.body.instructors,
      })
        .populate("batch")
        .populate("course")
        .populate("instructors");
      return res.status(200).json({ message: "Not possible", data });
    } else {
      const result = await Schedule.create(req.body);
      return res.status(201).json(result);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getAllSchedule = async (req, res) => {
  try {
    let docs = await Schedule.find({})
      .populate("batch")
      .populate("course")
      .populate("instructors");
    res.status(200).json(docs);
  } catch (error) {
    res.json(400).json(error);
  }
};

module.exports = { createSchedule, getAllSchedule };
