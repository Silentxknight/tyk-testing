import cors from "cors";
import express from "express";
import { router } from "./src/routes/routes";

const app = express();

// Enable cors support to accept cross origin requests
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
// REST API entry point
app.use("/entry", router);

app.listen(5000, () => console.log("Server Running 5000"));
