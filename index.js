const express = require("express");
const ConnectDB = require("./db");
const router = require("./Router/StudentRoute");


const app = express();
const port = 3000;
app.use(express.json())

ConnectDB();

app.use("/api/student", router)

app.listen(port,() => {
    console.log(`Server is on ${port}`);
})