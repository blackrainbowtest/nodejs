import { Box, Tab, Tabs } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AddButtonComponent from "app/shared-components/AddButtonComponent/AddButtonComponent";
import PopupComponent from "app/shared-components/PopupComponent/PopupComponent";
import SubCategorysAdd from "app/shared-components/SubCategorysAddComponent";
import { changeCurrentSubcategory } from "features/SubCategory/SubCategorySlice";
import { truncateName } from "utils/text";

const MainContainer = styled(Box)(
  ({ theme }) => `
  width: 100%;
  min-height: 40px;
  background: ${theme.palette.background.main}!important;
  display: flex;
  align-items: center;
  gap: 10px;
`);

const ButtonContainer = styled(Box)(
  ({ theme }) => `
  min-width: 45px;
  min-height: inherit;
  `
);

const CustomTabs = styled(Tabs)(
  ({ theme }) => `
  .MuiTabs-indicator {
    background-color: ${theme.palette.background.button}!important;
    min-height: 6px;
    border-radius: 25px;
  }
  .Mui-selected {
    color: ${theme.palette.background.button}!important;
  }
  .MuiTab-root {
    border-bottom: 6px solid white;
  }
  `
);

function SubCategorys() {
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const chooesedGender = useSelector((state) => state?.category?.gender);
  const choosedCategory = useSelector((state) => state?.category?.category);
  const [filtredSubCategory, setFiltredSubCategory] = useState([]);
  const [value, setValue] = useState("");
  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const filtered = subCategory
      .slice()
      .filter(
        (c) =>
          Number(c.parent) ===
          (chooesedGender ? choosedCategory.female : choosedCategory.male)
      );
    setFiltredSubCategory(filtered);
    if (filtered.length) {
      setValue(filtered[0].id);
      dispatch(changeCurrentSubcategory(filtered[0].id));
    } else {
      dispatch(changeCurrentSubcategory(-1));
    }
  }, [subCategory, chooesedGender, choosedCategory, dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(changeCurrentSubcategory(newValue));
  };

  const open = Boolean(anchor);
  const id = open ? "simple-popup" : undefined;

  const handleAddCategory = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const handleClosePopup = () => {
    setAnchor(null);
  };

  return (
    <MainContainer>
      <CustomTabs
        value={value}
        onChange={handleChange}
        aria-label='sub categorys'
      >
        {filtredSubCategory.map((c) => {
          return (
            <Tab
              key={c.id}
              value={c.id}
              label={c?.name ? truncateName(c.name) : "no-name"}
            />
          );
        })}
      </CustomTabs>
      <ButtonContainer>
        <AddButtonComponent id={id} callback={handleAddCategory} />
      </ButtonContainer>
      <PopupComponent
        id={id}
        open={open}
        anchor={anchor}
        close={handleClosePopup}
      >
        <SubCategorysAdd close={handleClosePopup} />
      </PopupComponent>
    </MainContainer>
  );
}

export default memo(SubCategorys);
