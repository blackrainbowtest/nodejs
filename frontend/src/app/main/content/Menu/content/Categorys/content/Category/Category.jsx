import { memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import CategoryComponent from "app/shared-components/CategoryComponent";
import AddButtonComponent from "app/shared-components/AddButtonComponent/AddButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "features/Category/CategorySlice";
import PopupComponent from "app/shared-components/PopupComponent/PopupComponent";
import CategorysAdd from "app/shared-components/CategorysAddComponent"
import CategoryMainContainer from 'app/shared-components/CategoryMainContainerComponent/CategoryMainContainer';

const ButtonContainer = styled(Box)(
  ({ theme }) => `
  min-width: 50px;
  min-height: inherit;
  `
);

function Category() {
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const category = useSelector((state) => state?.category?.data);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const dispatch = useDispatch();
  const [anchor, setAnchor] = useState(null);

  useEffect(() => {
    if (category.length === 0) {
      return;
    }
    const currentCategory = category.filter((c) => c.gender === chooesedGender);

    if (chooesedGender !== undefined) {
      if (choosedCategory.female === -1 && chooesedGender) {
        const newCategory = currentCategory.length ? currentCategory[0].id : -1;
        if (choosedCategory.female !== newCategory) {
          dispatch(
            changeCategory({
              ...choosedCategory,
              female: newCategory,
            })
          );
        }
      }

      if (chooesedGender === false && choosedCategory.male === -1) {
        const newCategory = currentCategory.length ? currentCategory[0].id : -1;
        if (choosedCategory.male !== newCategory) {
          dispatch(
            changeCategory({
              ...choosedCategory,
              male: newCategory,
            })
          );
        }
      }
    }
  }, [choosedCategory, chooesedGender, category, dispatch]);

  const handleCallbackCategory = (data) => {
    if (chooesedGender) {
      dispatch(changeCategory({ ...choosedCategory, female: data }));
    } else {
      dispatch(changeCategory({ ...choosedCategory, male: data }));
    }
  };

  const handleAddCategory = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  return (
    <CategoryMainContainer>
      {category.map((c) => {
        return chooesedGender === c.gender ? (
          <CategoryComponent
            key={c.id}
            active={
              chooesedGender
                ? choosedCategory.female === c.id
                : choosedCategory.male === c.id
            }
            item={c}
            callback={handleCallbackCategory}
          />
        ) : null;
      })}
      <ButtonContainer>
        <AddButtonComponent id={id} callback={handleAddCategory} />
      </ButtonContainer>
      <PopupComponent
        id={id}
        open={open}
        anchor={anchor}
        close={handleClosePopup}
      >
        <CategorysAdd close={handleClosePopup} />
      </PopupComponent>
    </CategoryMainContainer>
  );
}

export default memo(Category);
