import express, { Request, Response } from "express";
import expressWs from "express-ws";
const { app, getWss, applyTo } = expressWs(express());
// const express = require("express");
// const app = express();
// let expressWs = require("express-ws")(app);

app.use(express.json());

app.get("/testAPi", (req, res, next) => {
  res.send("test api working");
});

app.get("/test1", (req, res, next) => {
  console.log("running fine");
  res.send("Hello world");
});
app.post("/test1", (req, res, next) => {
  console.log("running fine");
  res.send("Hello world In Post");
});
app.post("/postTest", (req, res, next) => {
  res.send(req.body);
});

app.ws("/echo", function (ws: any, req: any) {
  ws.on("message", function (msg: string) {
    ws.send(msg);
  });
});

//* app routes
const signupRoutes = require("./routes/signupRoutes");
const loginRoutes = require("./routes/loginRoutes");
app.use("/register", signupRoutes);
app.use("/login", loginRoutes);

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
