const router = require("express").Router();

const { contactDetails, memberRegistration } = require("../controller/index");


router.post("/c", contactDetails);
router.post("/register", memberRegistration);

module.exports = router;