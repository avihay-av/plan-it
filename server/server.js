const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const planRouter = require("./routes/plan.js");

const port = 8083;
const app = express();

app.use([cors(), express.json()]);
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/plan", planRouter);

app.listen(port, () => {
  console.log(`Server is Running on Port: http://localhost:${port}`);
});
