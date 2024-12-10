const hostUrl = process.env.HOST_URL || 'http://localhost:5000';

const serializeCategory = (category) => {
  return {
    id: category.id,
    name: category.name,
    gender: category.gender,
    image: category.image ? `${hostUrl}${category.image}` : null,
  };
};

module.exports = { serializeCategory };
