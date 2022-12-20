require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 6009;


// middleware
app.use(cors());
app.use(express.json());

app.use(router);

app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

app.listen(PORT, () => {
    console.log("Server Start");
});