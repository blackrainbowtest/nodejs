const serializeProduct = (product) => {
  return {
    id: product.id,
    article: product.article,
    tags: product.tags,
    images: product.images.map((image) => `${image}`),
    golds: product.golds,
    price: product.price,
    stones: product.stones,
    works: product.works,
    userId: product.userId,
    currentTime: product.currentTime,
    gender: product.gender,
    category: product.category,
    subcategory: product.subcategory,
  };
};

module.exports = { serializeProduct };
