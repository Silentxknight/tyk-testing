import { Router } from "express";
import { SampleController } from "../controller/sample.controller";
import { LoginController } from "../controller/login.controller";
import { SignupController } from "../controller/signup.controller";
import { signupValidation } from "../middleware/signup.validation";
import { loginValidation } from "../middleware/login.validation";
export const router: Router = Router();

// creating instance of the controller class

const test = new SampleController();
const loginCon = new LoginController();
const signupCon = new SignupController();

router.post("/test", test.sayHello); // URL would be localhost:3000/entry/test

router.post("/login", loginValidation, loginCon.getLoggedIn); //* using middleware for Joi validation
router.post("/register", signupValidation, signupCon.getSignup); //* using middleware for Joi validation
