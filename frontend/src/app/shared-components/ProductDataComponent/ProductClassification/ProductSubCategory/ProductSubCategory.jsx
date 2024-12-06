import { Box, Tabs, Tab } from "@mui/material";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { truncateName } from "utils/text";
import { useSelector } from "react-redux";

const SubCategoryContainer = styled(Box)(
  ({ theme }) => `
      width: 100%;
      min-height: 40px;
      padding: 0px 30px;
      background: ${theme.palette.background.main}!important;
      display: flex;
      align-items: center;
      gap: 10px;
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

function ProductSubCategory({ props }) {
  const { selectedSubCategory, setSelectedSubCategory, selectedCategory } =
    props;
  const subCategory = useSelector((state) => state?.subCategory?.data);
  const [activeSubCategorys, setActiveSubCategorys] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedSubCategory(newValue);
  };

  useEffect(() => {
    const selectActiveSubCategorys = subCategory.filter(
      (sb) => sb.parent === selectedCategory
    );
    setActiveSubCategorys(selectActiveSubCategorys);
  }, [selectedCategory, subCategory]);
  return (
    <SubCategoryContainer>
      <CustomTabs
        value={selectedSubCategory}
        onChange={handleChange}
        aria-label='sub categorys'
      >
        {activeSubCategorys.map((c) => {
          return (
            <Tab
              key={c.id}
              value={c.id}
              label={c?.name ? truncateName(c.name) : "no-name"}
            />
          );
        })}
      </CustomTabs>
    </SubCategoryContainer>
  );
}

export default memo(ProductSubCategory);
