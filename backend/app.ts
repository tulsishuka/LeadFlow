import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import leadRoutes from "./routes/lead.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Lead Management API Running"
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);



export default app;

