import express from "express";
import itemRouter from "./routers/items.route";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/items", itemRouter);

app.listen(port, () => console.log("Listening on port " + port));
