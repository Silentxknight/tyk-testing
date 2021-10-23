// API Business logic file

import { Request, Response } from "express";

export class SignupController {
  public getSignup = async (req: Request, res: Response) => {
    //   Handle request and send response here and handle exceptions
    try {
      // Destruct request body
      //   const { message } = req.body;
      // handling headers issue to avoid cors error
      res
        .status(200)
        .header({ "Access-Control-Allow-Origin": "*" })
        .send({ status: "SignUp Working Fine", data: req.body });
    } catch (error: any) {
      res.status(500).send({ message: "Internal Server Error" });
      console.log(error);
    }
  };
}
