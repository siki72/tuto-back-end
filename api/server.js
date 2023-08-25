import express from "express";
import cors from "cors";
import userRoutes from "./utils/routes/userRoutes.js";
const app = express();
const PORT = 3000;

//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
