const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose
  .connect(
    "mongodb+srv://narutoUzumakii:Attic12@cluster0.lfz8tyd.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }
  )
  .then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log("not connected to database");
    console.log(err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
