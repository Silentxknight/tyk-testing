// API Business logic file

import { Request, Response, NextFunction } from "express";
import { signupValidation } from "../middleware/signup.validation";
import { db } from "../../index";
export class LoginController {
  public getLoggedIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    //   Handle request and send response here and handle exceptions
    try {
      // Destruct request body
      //   const { username } = req.body;
      // handling headers issue to avoid cors error
      // *joi validation here
      //   const result = await signupValidation(req, res, next);
      //   console.log(result);

      console.log(req.body);

      let sql: string =
        "INSERT INTO users (username, email, password) VALUES ('Cardinal', 'test@gmail.com', '123456');";
      db.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
        console.log("user Created!");
      });
      res
        .status(200)
        .header({ "Access-Control-Allow-Origin": "*" })
        .send({ status: "Signin Working Fine", data: req.body });
    } catch (error: any) {
      res.status(500).send({ message: "Internal Server Error" });
      console.log(error);
    }
  };
}
