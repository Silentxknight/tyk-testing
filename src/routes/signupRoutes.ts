// const express = require("express");
import express, { Request, Response } from "express";
const router = express.Router();

//* controllers
const registerController = require("../controller/registerController");

router.post("/", registerController.signup);

router.get("/", (req, res) => {
  res.send("Sorry Get Not Allowed!");
});

module.exports = router;
