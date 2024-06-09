require("dotenv").config();
const express = require("express");
const dbConnection = require("./dbConnect");
const courseRouter = require("./routers/courses");
const instructorRouter = require("./routers/instructor");
const batchRouter = require("./routers/batchs");
const scheduleRouter = require("./routers/schedule");
const cors = require("cors");
const app = express();
dbConnection();

// middlewares
app.use(cors());
app.use(express.json());

// Routers

app.use("/api/courses", courseRouter);
app.use("/api/batches", batchRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/schedule", scheduleRouter);

app.post("/login", async (req, res) => {
  // console.log(res.body)
  if (req.body.id === "admin@gmail.com" && req.body.password === "admin") {
    return res.status(200).json({ message: "Login sucessfully" });
  } else {
    return res.status(401).json({ message: "Invalid details" });
  }
});

// test req
app.get("/", (req, res) => {
  res.send("Jay jagannath");
});

app.listen(process.env.PORT, () => {
  console.log("server started in port " + process.env.PORT);
});
