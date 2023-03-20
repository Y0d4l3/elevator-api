var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  accelerometerDataRoutes = require("./routes/accelerometerData"),
  strangeEventRoutes = require("./routes/strangeEvent");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

try {
  mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected to db");
} catch (error) {
  handleError(error);
}
process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error.message);
});

app.use(express.json());
app.use(accelerometerDataRoutes);
app.use(strangeEventRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running`);
});
