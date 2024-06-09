require("dotenv").config();
const express = require("express");
// const path = require('path');
const dbConnection = require("./dbConnect");
// const cookieParser = require("cookie-parser");
// const validator = require("./controllers/Validator");
const courseRouter = require("./routers/courses");
const instructorRouter = require("./routers/instructor");
const batchRouter = require("./routers/batchs");
const scheduleRouter = require("./routers/schedule");
// const categoryRouter = require("./routers/Category");
// const brandRouter = require("./routers/Brand");
// const userRouter = require("./routers/User");
// const authRouter = require("./routers/Auth");
// const cartRouter = require("./routers/Cart");
// const orderRouter = require("./routers/Order");
const cors = require("cors");
const app = express();
dbConnection();

// middlewares
// app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.json());
// app.use(cookieParser());
// app.use(cors({ exposedHeaders: ["X-Total-Count"] }));

// Routers

app.use("/api/courses", courseRouter);
app.use("/api/batches", batchRouter);
app.use("/api/instructor", instructorRouter);
app.use("/api/schedule", scheduleRouter);
// app.use("/api/batches", categoryRouter);
// app.use("/api/instructor", brandRouter);
// app.use("/api/schedule", validator, userRouter);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// test req
app.get("/", (req, res) => {
  res.send("Jay jagannath");
});

app.listen(process.env.PORT, () => {
  console.log("server started in port " + process.env.PORT);
});
