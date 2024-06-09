const express = require("express");
const {
  createInstructor,
  getAllInstructor,
} = require("../controller/instructor");
const router = express.Router();

router.get("/", getAllInstructor);
router.post("/", createInstructor);
// router.get("/:id", getProductById);
// router.patch("/:id", updateProductById);

module.exports = router;
