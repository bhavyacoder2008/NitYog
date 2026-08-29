import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/topProducts", (req, res) => {
  try {
    const topProducts = [
      { id: 1, name: "Product 1", price: 10.99 },
      { id: 2, name: "Product 2", price: 19.99 },
    ];

    res.json(topProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default app;
