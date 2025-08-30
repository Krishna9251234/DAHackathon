import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import creditsRouter from "./routes/credits.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Green Hydrogen Credit System API");
});

app.use("/api/credits", creditsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));