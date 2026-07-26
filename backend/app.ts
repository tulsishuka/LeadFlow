import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import leadRoutes from "./routes/lead.routes";
import dashboardRoutes from "./routes/dashboard.routes";

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

app.use("/api/dashboard", dashboardRoutes);



export default app;

