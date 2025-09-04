import express from "express";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// endpoints
// app.use("/api/user");

app.listen(port, () => {
  console.log("server running on port: " + port);
});
