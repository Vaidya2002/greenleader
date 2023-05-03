const router = require("express").Router();

const { contactDetails } = require("../controller/index");


router.post("/c", contactDetails);
// new 
module.exports = router;