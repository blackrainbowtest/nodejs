import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import TitleActionComponent from "app/shared-components/TitleActionComponent";
import { truncateName } from "utils/text";
import { useDispatch, useSelector } from "react-redux";
import TextInputComponent from "app/shared-components/TextInputComponent";
import { addSubCategory } from "features/SubCategory/SubCategoryAPI";

const PopupBody = styled("div")(
  ({ theme }) => `
        width: 350px;
        min-height: 160px;
        padding: 12px 20px;
        margin-top: 8px;
        border-radius: 5px;
        background: ${theme.palette.background.default};
        box-shadow: ${theme.palette.shadow.default};
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1;
      `
);

function SubCategorysAdd({ close }) {
  const [categoryItem, setCategoryItem] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const category = useSelector((state) => state?.category?.data);
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const dispatch = useDispatch();

  const handleActionPopup = () => {
    if (subCategoryName.trim()) {
      dispatch(
        addSubCategory({ name: subCategoryName, parent: categoryItem.id })
      );
    }
    close();
  };

  useEffect(() => {
    let categoryID = "-1";
    if (chooesedGender) {
      categoryID = choosedCategory.female;
    } else {
      categoryID = choosedCategory.male;
    }
    const currCategory = category.slice().filter((c) => c.id === categoryID)[0];
    setCategoryItem(currCategory);
  }, [category, chooesedGender, choosedCategory.female, choosedCategory.male]);

  return (
    <PopupBody>
      <TitleActionComponent
        close={close}
        title={`${
          categoryItem?.name ? truncateName(categoryItem?.name) : "no name"
        }: Add subcategory`}
      />
      <TextInputComponent
        value={subCategoryName}
        callback={setSubCategoryName}
        label='Subcategory'
      />
      <ActionButtonComponent callback={handleActionPopup} label='Add' />
    </PopupBody>
  );
}

export default memo(SubCategorysAdd);
