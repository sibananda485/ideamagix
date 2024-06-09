const express = require("express");
const { getAllBatch, createBatch } = require("../controller/batches");
const router = express.Router();

router.get("/", getAllBatch);
router.post("/", createBatch);

module.exports = router;
