const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ssunny0203",
  database: "bbs",
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  const sqlQuery = "INSERT INTO requested (rowno) VALUES (1)";
  db.query(sqlQuery, (err, result) => {
    console.log(err);
    res.send("success!");
  });
});

app.get("/list", (req, res) => {
  const sqlQuery =
    "SELECT BOARD_ID, BOARD_TITLE, REGISTER_ID, DATE_FORMAT(REGISTER_DATE, '%Y-%m-%d') AS REGISTER_DATE FROM BOARD;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

https: app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
