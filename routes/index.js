const express = require("express");
const router = express.Router();
const { processInput } = require("../utils");

router.get("/", (req, res) => {
    res.render("index");
});

router.post("/", (req, res) => {
    const longCode = req.body.long_code;
    const vin = req.body.vin;
    const result = processInput(longCode, vin);
    res.render("result", { result });
});

module.exports = router;
