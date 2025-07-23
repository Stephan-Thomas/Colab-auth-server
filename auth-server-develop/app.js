import express from "express";
import userRoutes from "./controllers/routes/user.routes.js";
import errorHandler from "./middleware/error.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);
app.use(errorHandler);

export default app;
