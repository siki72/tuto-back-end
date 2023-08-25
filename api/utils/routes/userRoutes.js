import express from "express";
import { getAllUsers, addUser } from "../../controllers/usersControllers.js";
const router = express.Router();

router.post("/addUser", addUser);
router.get("/allUsers", getAllUsers);

export default router;
