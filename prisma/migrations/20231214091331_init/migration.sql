-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "img_product" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "description_product" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "starProduct" (
    "id" SERIAL NOT NULL,
    "star" DECIMAL(65,30),
    "userId" INTEGER,
    "productId" INTEGER,

    CONSTRAINT "starProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "starProduct" ADD CONSTRAINT "starProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "starProduct" ADD CONSTRAINT "starProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
