import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
// import reservationRouter from './error/error.js'
import router from "./routes/reservationRoute.js";
const app = express();

dotenv.config({ path: "./config/config.env" });

// For connectio backend to frontend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", router);
// app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection();

app.use(errorMiddleware);
export default app;
