import express from "express";
import addTodolistController from "../controllers/todolistController.js";
import getlistController from "../controllers/getlistController.js";
import getlistdetailController from "../controllers/getlistdetailController.js";
import supplistdetail from "../controllers/supplistdetailController.js";
import supplist from "../controllers/suppcontroller.js";

const router = express.Router();

router.get("/getlist", getlistController);
router.get("/:id", getlistdetailController);

router.post("/add", addTodolistController);

router.post("/suppdetail", supplistdetail);
router.post("/supp", supplist);
export default router;
