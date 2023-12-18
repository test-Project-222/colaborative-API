const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var ProductStar = require("../models/Product");

async function userRatingProduct() {
  let usersAddRating = [],
    temp_buyer;
  let allUser = await prisma.user.findMany();
  let allProduct = await prisma.product.findMany();
  for (const user of allUser) {
    temp_buyer = new ProductStar(user.firstName, user.secondName, user.id);
    let userId = temp_buyer.getId();
    for (const product of allProduct) {
      let starUser = await prisma.starProduct.findFirst({
        where: {
          productId: product.id,
          userId: userId,
        },
      });
      if (starUser) {
        temp_buyer.addProductRating(
          product.product_name,
          starUser.star,
          product.img_product,
          product.description_product
        );
      }
    }
    usersAddRating.push(temp_buyer);
  }
  
  return usersAddRating;
}
// // Test Hafid
// temp_buyer = new ProductStar('Hafid', 'Nur',11)
// temp_buyer.addProductRating('RINSO ANTI NODA', 2.5)
// temp_buyer.addProductRating('RINSO MOLTO', 3.5)

// usersAddRating.push(temp_buyer)
// // end Test

// temp_buyer = new ProductStar('Gil', 'Tamari',1)
// temp_buyer.addProductRating('RINSO ANTI NODA', 5.0)
// temp_buyer.addProductRating('RINSO MOLTO', 5.0)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 3.0)
// temp_buyer.addProductRating('TROPICAL ', 3.5)
// temp_buyer.addProductRating('SARI MURNI', 2.5)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 4.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 1.5)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 2.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 1.0)

// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Kanye', 'West',2)
// temp_buyer.addProductRating('RINSO ANTI NODA', 5.0)
// temp_buyer.addProductRating('RINSO MOLTO', 5.0)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 1.0)
// temp_buyer.addProductRating('TROPICAL ', 3.0)
// temp_buyer.addProductRating('SARI MURNI', 1.5)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 1.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 1.0)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 4.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 1.0)
// temp_buyer.addProductRating('SOSRO CELUP', 3.0)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 1.0)
// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Jay', 'Z',3)
// temp_buyer.addProductRating('RINSO ANTI NODA', 1.0)
// temp_buyer.addProductRating('RINSO MOLTO', 2.5)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 3.0)
// temp_buyer.addProductRating('TROPICAL ', 2.5)
// temp_buyer.addProductRating('SARI MURNI', 1.5)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 1.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 2.0)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 5.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 1.0)
// temp_buyer.addProductRating('SOSRO CELUP', 3.5)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 1.0)

// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Tupac', 'Shakur',4)
// temp_buyer.addProductRating('RINSO ANTI NODA', 1.5)
// temp_buyer.addProductRating('RINSO MOLTO', 3.5)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 3.5)
// temp_buyer.addProductRating('TROPICAL ', 5.0)
// temp_buyer.addProductRating('SARI MURNI', 5.0)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 1.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 2.5)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 2.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 1.5)
// temp_buyer.addProductRating('SOSRO CELUP', 3.0)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 1.0)

// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Dr', 'Dre',5)
// temp_buyer.addProductRating('RINSO ANTI NODA', 2.5)
// temp_buyer.addProductRating('RINSO MOLTO', 3.5)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 3.0)
// temp_buyer.addProductRating('TROPICAL ', 3.5)
// temp_buyer.addProductRating('SARI MURNI', 2.5)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 2.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 5.0)
// temp_buyer.addProductRating('SOSRO CELUP', 3.0)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 1.0)
// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Eminem', '',6)
// temp_buyer.addProductRating('RINSO ANTI NODA', 1.5)
// temp_buyer.addProductRating('RINSO MOLTO', 1.0)
// temp_buyer.addProductRating('SARI MURNI', 2.5)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 1.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 3.5)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 2.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 2.0)
// temp_buyer.addProductRating('SOSRO CELUP', 3.0)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 1.0)

// usersAddRating.push(temp_buyer)

// temp_buyer = new ProductStar('Run the', 'Jewels',7)
// temp_buyer.addProductRating('BIMOLI 2 LT ', 2.0)
// temp_buyer.addProductRating('TROPICAL ', 2.5)
// temp_buyer.addProductRating('SARI MURNI', 1.5)
// temp_buyer.addProductRating('OLTO ULTRA BIRU', 1.0)
// temp_buyer.addProductRating('PEPSODENT WHITENING', 2.5)
// temp_buyer.addProductRating('CLOSE UP MILK CALSIUM', 3.0)
// temp_buyer.addProductRating('INDOMIE GORENG ', 5.0)
// temp_buyer.addProductRating('SOSRO CELUP', 3.5)
// temp_buyer.addProductRating('KAPAL API SPESIAL ', 4.0)

// usersAddRating.push(temp_buyer)

module.exports = userRatingProduct;
