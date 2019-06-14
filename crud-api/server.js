const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "dbpass",
    database: "crud"
  }
});

app.get("/", (req, res) => {
  //res.send({ name: "John" });
  db.select("*")
    .from("data")
    .then(data => {
      res.json(data);
    });
});

app.post("/", (req, res) => {
  const { input } = req.body;
  db.transaction(trx => {
    trx
      .insert({ value: input })
      .into("data")
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(res.json({ sucess: "Inserted" }))
    .catch(err => res.status(400).json(err));
});

app.post("/update", (req, res) => {
  const { input } = req.body;
  db("data")
    .where("value", "=", input)
    .update({ value: "123456789" })
    .then(res.json({ sucess: "Updated" }))
    .catch(err => res.status(400).json(err));
});

app.delete("/delete", (req, res) => {
  const { cardID } = req.body;
  console.log(cardID);
  db("data")
    .where("id", "=", cardID)
    .del()
    .then(data => {
      if (data != "0") {
        res.json({ sucess: "Deleted" });
      } else {
        res.status(400).json({ error: `can't find in database` });
      }
    })
    .catch(err => res.status(400).json(err));
});

app.listen(3001, () => {
  console.log("server listening");
});
