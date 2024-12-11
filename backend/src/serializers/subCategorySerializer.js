const serializeSubCategory = (subCategory) => {
  return {
    id: subCategory.id,
    name: subCategory.name,
    parent: subCategory.parent,
  };
};

module.exports = { serializeSubCategory };
