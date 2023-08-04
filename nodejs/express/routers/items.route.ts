import { Router } from "express";
import itemsController from "../controllers/items.controller";

const router = Router();

router.get("/", itemsController.getItems);
router.post("/", itemsController.postItem);
router.get("/:id", itemsController.getItem);
router.patch("/:id", itemsController.patchItem);
router.delete("/:id", itemsController.deleteItem);

export default router;
