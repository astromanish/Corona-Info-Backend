if (process.env.NODE_ENV !== "production") {
    require("dotenv/config");
}

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoute = require("./routes/index");
const questionRoute = require("./routes/question");
const answerRoute = require("./routes/answer");

const app = express();

app.use(bodyParser.json());
// to send allow-access-origin as * to all response so no cors error from any origin
app.use(cors());
app.use("/", indexRoute);
app.use("/questions", questionRoute);
app.use("/answers", answerRoute);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => console.log("Database Connection: OK"));
db.on("error", (err) => console.error(err));

app.listen(process.env.PORT);
