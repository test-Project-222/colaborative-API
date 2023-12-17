function ProductUser(first_name, last_name, id, product_user_list) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.name = this.first_name + " " + this.last_name;
  this.id = id || 1;
  this.product_list = product_user_list || [];
}
ProductUser.prototype.getId = function () {
  return this.id;
};
ProductUser.prototype.getName = function () {
  return this.name;
};

ProductUser.prototype.addProductRating = function (
  product_name,
  product_rating,
  img_product,
  description_product
) {
  this.product_list.push({
    name: product_name,
    rating: product_rating,
    getId: function () {
      return product_name;
    },
    img: img_product,
    descriptioon: description_product,
  });
};
ProductUser.prototype.getProductRatingsList = function () {
  return this.product_list;
};
ProductUser.prototype.getRatingList = function () {
  return this.getProductRatingsList();
};

ProductUser.prototype.getProductRating = function (product_name) {
  var i,
    len = this.product_list.length;

  for (i = 0; i < len; i++) {
    if (this.product_list[i].name === product_name) {
      return i;
    }
  }
  return -1;
};
ProductUser.prototype.getRating = function (product) {
  return this.getProductRating(product.name);
};

module.exports = ProductUser;
