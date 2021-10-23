import cors from "cors";
import express from "express";
import { router } from "./src/routes/routes";
import mysql from "mysql";
const app = express();
export const db = mysql.createConnection({
  host: "svc-04f7fb8e-cbd2-43c7-9dbc-4b9a3ed1a746-ddl.aws-sydney-1.svc.singlestore.com",
  user: "admin",
  password: "", //your password here
  database: "testDB",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database conneted!");
  }
});

// Enable cors support to accept cross origin requests
app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
// REST API entry point
app.use("/entry", router);

app.listen(5000, () => console.log("Server Running 5000"));
