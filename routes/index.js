const router = require("express").Router();

const { contactDetails, member } = require("../controller/index");


router.post("/c", contactDetails);
router.post("/register", member);

module.exports = router;