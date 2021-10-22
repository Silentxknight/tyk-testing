import express from "express";
import signup from "./routes/signupRoutes";
import config from "./config/config";
const app = express();
const con = new config();
app.use("/register", signup);
// app.use("/login", loginRoutes);

app.listen(con.port, () => {
  console.log(`app is running on port ${con.port}`);
});
