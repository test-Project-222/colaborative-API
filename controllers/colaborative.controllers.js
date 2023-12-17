const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const allProduct = require("../libs/buyProduct");
(Collaborative = require("../libs/collaborative")),
  (Distance = require("../libs/distance")),
  (collab = new Collaborative(new Distance()));
module.exports = {
  getProductRecomentation: async (req, res, next) => {
    try {
      const product = await allProduct();
      let productDetail = [];
      const user = product[0];
      const recomendationProduct = collab.getRecommendations(product, user);
      for (const value of recomendationProduct) {
        let findProduct = await prisma.product.findFirst({
          where: {
            product_name: value.id,
          },
        });
        productDetail.push(findProduct);
      }
      console.log(productDetail);
      res.status(200).json({
        status: true,
        message: "data succes to Show",
        productRecomendation: recomendationProduct,
        productDetail
      });
    } catch (err) {
      next(err);
    }
  },
  getAllProduct : async (req,res,next)=>{
    const allProduct = await prisma.product.findMany()
    res.status(200).json({
      status: true,
      message: "data succes to Show",
      allProduct
    });
  }
};
