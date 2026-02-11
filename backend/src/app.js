import express from "express";
import { createServer } from "node:http";
import cors from "cors";
import connectDB from "./config/db.js"; 
import { connectToSocket } from "./controllers/socketManager.js";

const app = express();

import userRoutes from "./routes/users.routes.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/users", userRoutes);




const server = createServer(app);
const io = connectToSocket(server);

app.get("/", (req, res) => {
  res.send("API is running...");
});

export const startServer = async () => {
  const port = process.env.PORT || 3000;

  // 1. Connect to Database
  await connectDB();

  // 2. Start Server
  server.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
};
