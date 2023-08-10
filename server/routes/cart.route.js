const router = require("express").Router();
const cartControllers = require("../controllers/cartControllers");
const { verifyToken } = require("../utils/verifyToken");

router.get("/find", verifyToken, cartControllers.getCart);
router.post("/", verifyToken, cartControllers.addCart);
router.delete("/:cartItem", verifyToken, cartControllers.deleteCartItem);

module.exports = router;
