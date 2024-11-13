// src/app.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes.js";
import dotenv from "dotenv";

dotenv.config();
export const PORT = process.env.PORT || 2358;

export const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(
  cors({
    origin: `${process.env.DOMAIN}`,
    methods: ["GET", "POST"],
    // credentials: true,
  })
);

// Use defined routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
