const router = require("express").Router();
const productControllers = require("../controllers/productsControllers");

router.get("/", productControllers.getAllProducts);
router.get("/:id", productControllers.getProduct);
router.get("/search/:key", productControllers.searchProducts);
router.post("/", productControllers.createProduct);

module.exports = router;
