const express = require("express");
const router = express.Router();
const {
  getProductRecomentation,getAllProduct
} = require("../controllers/colaborative.controllers");
/* GET home page. */
router.get("/", getProductRecomentation);
router.get("/product", getAllProduct);

module.exports = router;
