"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_ws_1 = __importDefault(require("express-ws"));
var _a = (0, express_ws_1.default)((0, express_1.default)()), app = _a.app, getWss = _a.getWss, applyTo = _a.applyTo;
// const express = require("express");
// const app = express();
// let expressWs = require("express-ws")(app);
app.use(express_1.default.json());
app.get("/testAPi", function (req, res, next) {
    res.send("test api working");
});
app.get("/test1", function (req, res, next) {
    console.log("running fine");
    res.send("Hello world");
});
app.post("/test1", function (req, res, next) {
    console.log("running fine");
    res.send("Hello world In Post");
});
app.post("/postTest", function (req, res, next) {
    res.send(req.body);
});
app.ws("/echo", function (ws, req) {
    ws.on("message", function (msg) {
        ws.send(msg);
    });
});
//* app routes
var signupRoutes = require("./routes/signupRoutes");
var loginRoutes = require("./routes/loginRoutes");
app.use("/register", signupRoutes);
app.use("/login", loginRoutes);
app.listen(3000, function () {
    console.log("app is running on port 3000");
});
