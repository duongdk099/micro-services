const express = require("express");
const router = express();

const productCtrl = require("../Controllers/product.js");
router.post("/addProduct", productCtrl.createProduct);
router.get("/getProduct/:id", productCtrl.getProduct);
router.get("/getProducts", productCtrl.getProducts);
router.put("/updateProduct/:id", productCtrl.updateProduct);
router.delete("/deleteProduct/:id", productCtrl.deleteProduct);
module.exports = router;
