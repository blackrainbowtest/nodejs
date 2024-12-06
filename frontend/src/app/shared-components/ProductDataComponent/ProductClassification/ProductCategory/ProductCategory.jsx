import { memo } from "react";
import { useSelector } from "react-redux";
import CategoryComponent from "app/shared-components/CategoryComponent";
import CategoryMainContainer from 'app/shared-components/CategoryMainContainerComponent';

function ProductCategory({ props }) {
  const { gender, selectedCategory, setSelectedCategory } = props;
  const category = useSelector((state) => state?.category?.data);

  const handleCallbackCategory = (data) => {
    setSelectedCategory(data);
  };

  return (
    <CategoryMainContainer>
      {category.map((c) => {
        return gender === c.gender ? (
          <CategoryComponent
            key={c.id}
            active={selectedCategory === c.id}
            item={c}
            callback={handleCallbackCategory}
          />
        ) : null;
      })}
    </CategoryMainContainer>
  );
}

export default memo(ProductCategory);
