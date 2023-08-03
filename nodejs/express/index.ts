import express from "express";
import path from "path";
import ItemsDB from "./listadb";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.get("/items", (req, res) => {
  const list = ItemsDB.read();
  res.status(200).send(list);
});
app.post("/items", (req, res) => {
  const item = req.body;
  ItemsDB.create(item);
  res.sendStatus(200);
});
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  try {
    const items = ItemsDB.read(Number(id));
    res.status(200).send(items);
  } catch (err) {
    res.sendStatus(404);
  }
});
app.patch("/items/:id", (req, res) => {
  const { id } = req.params;
  const item = req.body;
  ItemsDB.update({ id: Number(id), name: item.name, price: item.price });
  res.sendStatus(200);
});
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  ItemsDB.delete(Number(id));
  res.sendStatus(200);
});

app.listen(port, () => console.log("Listening on port " + port));
