exports.signin = (req: any, res: any) => {
  console.log("Signin Routes: ");
  console.log(req.body);
  res.send({ status: "Signin Working Fine", data: req.body });
};
