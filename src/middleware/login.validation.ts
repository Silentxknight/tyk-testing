import { NextFunction, Request, Response } from "express";
import Joi, { object, string } from "joi";

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object()
    .keys({
      username: Joi.string().alphanum().min(3).max(20).required(),

      password: Joi.string().required(),
    })
    .required();
  console.log("middle ware working");

  try {
    req.body = await schema.validateAsync(req.body);
    next();
    //Handle exception in catch
  } catch (e: any) {
    console.log(e);
    res.status(400).send({ message: e.message });
  }
};
