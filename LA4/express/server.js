const express= require('express')
const cors = require("cors");
const mysql = require("mysql");

const app=express()

app.use(express.json());
app.use(cors());

app.post('/getcitname',(req,res)=>{
    var city=req.body
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get("/getcityweather/:city", (req, res) => {
    const city = req.params.city;

    try {
      const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "your_new_password",
        database: "awdmad",
      });
      connection.connect();
      console.log("Connected");
      connection.query(`SELECT * FROM weather WHERE city="${city}"`, function (err, rows, fields) {
          console.log("called")
        if (err) throw err;
        res.send(rows)
        console.log(rows);
      });
      connection.end();
    } catch (e) {
      res.json({
        status: 400,
        message: e.message,
      });
    }
  });

  app.listen(5000, "localhost", () =>
  console.log("Listening on localhost:5000")
);

  