import { Request, Response } from "express";
import ItemsDB from "../listadb";

const getItems = (req: Request, res: Response) => {
  const list = ItemsDB.read();
  res.status(200).send(list);
};

const getItem = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const items = ItemsDB.read(Number(id));
    res.status(200).send(items);
  } catch (err) {
    res.sendStatus(404);
  }
};

const postItem = (req: Request, res: Response) => {
  const item = req.body;
  ItemsDB.create(item);
  res.sendStatus(200);
};

const patchItem = (req: Request, res: Response) => {
  const { id } = req.params;
  const item = req.body;
  ItemsDB.update({ id: Number(id), name: item.name, price: item.price });
  res.sendStatus(200);
};

const deleteItem = (req: Request, res: Response) => {
  const { id } = req.params;
  ItemsDB.delete(Number(id));
  res.sendStatus(200);
};

export default {
  getItems,
  getItem,
  postItem,
  patchItem,
  deleteItem,
};
