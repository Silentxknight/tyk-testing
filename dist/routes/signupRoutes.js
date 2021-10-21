"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
//* controllers
var registerController = require("../controller/registerController");
router.post("/", registerController.signup);
router.get("/", function (req, res) {
    res.send("Sorry Get Not Allowed!");
});
module.exports = router;
