const express = require("express");
const mongoose = require("mongoose")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const api_routes = require("./routes/api_routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.use("/api", api_routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)
.then(() => console.log("connected to db"))


app.listen(PORT, () => {
  console.log(`🌎 ==> API server listening on http://localhost:${PORT}`);
});
