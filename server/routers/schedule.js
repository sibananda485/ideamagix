const express = require("express");
const { createSchedule, getAllSchedule } = require("../controller/schedule");
const router = express.Router();

router.get("/", getAllSchedule);
router.post("/", createSchedule);
// router.get("/:id", getProductById);
// router.patch("/:id", updateProductById);

module.exports = router;
