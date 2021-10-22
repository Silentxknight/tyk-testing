import express, { Request, Response } from "express";
export default class signUp {
  public signupRoute(req: Request, res: Response) {
    res.send("Hello, Post Working Fine!");
    console.log("hello");
  }
}
