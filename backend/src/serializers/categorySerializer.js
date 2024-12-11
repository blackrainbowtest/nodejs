const serializeCategory = (category) => {
  return {
    id: category.id,
    name: category.name,
    gender: category.gender,
    image: category.image ? `${category.image}` : null,
  };
};

module.exports = { serializeCategory };
