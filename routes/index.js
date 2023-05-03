const router = require("express").Router();

const { contactDetails } = require("../controller/index");


router.post("/c", contactDetails);
module.exports = router;