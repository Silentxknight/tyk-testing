"use strict";
exports.signup = function (req, res) {
    console.log("Signup Routes: ");
    console.log(req.body);
    res.send({ status: "Signup Working Fine", data: req.body });
};
