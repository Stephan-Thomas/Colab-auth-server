import express from "express";
import userRoutes from "./controllers/routes/user.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);

export default app;
