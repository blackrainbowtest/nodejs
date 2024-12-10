const serializeCategory = (category) => {
  return {
    id: category.id,
    name: category.name,
    gender: category.gender,
    image: category.image ? `${process.env.HOST_URL}${category.image}` : null, // Полный путь к изображению
  };
};

module.exports = { serializeCategory };
