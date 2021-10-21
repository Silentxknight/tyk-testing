import express, { Request, Response } from "express";
const router = express.Router();

//* controllers
const loginController = require("../controller/loginController");

router.post("/", loginController.signin);

router.get("/", (req, res) => {
  res.send("Sorry Get Not Allowed!");
});

module.exports = router;
