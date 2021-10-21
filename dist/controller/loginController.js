"use strict";
exports.signin = function (req, res) {
    console.log("Signin Routes: ");
    console.log(req.body);
    res.send({ status: "Signin Working Fine", data: req.body });
};
