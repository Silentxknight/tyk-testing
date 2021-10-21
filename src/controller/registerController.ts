exports.signup = (req: any, res: any) => {
  console.log("Signup Routes: ");
  console.log(req.body);
  res.send({ status: "Signup Working Fine", data: req.body });
};
