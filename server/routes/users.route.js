const router = require("express").Router();
const userControllers = require("../controllers/usersControllers");
const { verifyToken } = require("../utils/verifyToken");

router.get("/", verifyToken, userControllers.getUser);
router.delete("/", verifyToken, userControllers.deteteUser);

module.exports = router;
