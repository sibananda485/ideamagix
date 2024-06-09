const express = require("express");
const { createCourse, getAllCourse } = require("../controller/courses");
const router = express.Router();

router.get("/", getAllCourse);
router.post("/", createCourse);
// router.get("/:id", getProductById);
// router.patch("/:id", updateProductById);

module.exports = router;
