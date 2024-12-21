const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

const list = [];
let id = 0;

app.get("/list", (req, res) => {
  if (list.length == 0) {
    return res.send("List is empty");
  }
  return res.status(200).json({ message: "list fetched successfully", list });
});

app.post("/list", (req, res) => {
  let { item, price } = req.body;
  if (!item || !price) {
    return res.status(400).json({ error: "missing item info" });
  }
  let newItem = { id: id++, item, price };
  list.push(newItem);
  return res.status(200).json({ message: "item added", list });
});

app.delete("/list/:id", (req, res) => {
  let itemId = parseInt(req.params.id);
  let checkItem = list.find((item) => {
    return item.id == itemId;
  });
  if (!checkItem) {
    return res.status(400).json({ error: "item not found", list });
  }
  let updatedList = list.filter((item) => item.id !== itemId);
  list.length = 0;
  list.push(...updatedList);
  res.status(200).json({ message: "Item deleted", list });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
