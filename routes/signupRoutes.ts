import express, { Request, Response } from "express";
import signUp from "../controller/signupController";
const router = express.Router();

const sg = new signUp();

try {
  router.post("/", sg.signupRoute);
} catch (error) {
  console.log("Something went wrong! (post)");
}

try {
  router.get("/", (req: Request, res: Response) => {
    res.send("Sorry Get Not Allowed!");
  });
} catch (error) {
  console.log("Something went wrong! (get)");
}

export = router;
