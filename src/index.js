import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./services/mongodb/connectDB";
import authRoutes from "./routes/user";

dotenv.config("./.env");

const app = express();

const PORT = process.env.PORT || 8080;

connectDb();
app.use(express.json());
app.use("/user", authRoutes);

app.listen(PORT, () => {
  console.log(`server is runing on PORT ${PORT}`);
});
