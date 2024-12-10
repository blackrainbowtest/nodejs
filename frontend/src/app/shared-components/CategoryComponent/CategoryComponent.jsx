import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import noImage from "images/noImage.jpg";
import { truncateName } from 'utils/text';

const MainContainer = styled(Box)`
  min-height: 80px;
  min-width: 140px;
  border-radius: 5px;
  background: ${(props) => props.theme.palette.background.default}!important;
  color: ${(props) => props.theme.palette.common.black}!important;
  box-shadow: ${(props) => props.theme.palette.shadow.default};
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.background.input}!important;
  }
  &.active {
    border: 2px solid
      ${(props) => props.theme.palette.secondary.button}!important;
  }
  & img {
    max-height: 50px;
  }
`;

function CategoryComponent({ item, active, callback }) {

  const handleClickCategory = (event) => {
    event.stopPropagation()
    callback(item.id)
  };

  const handleMouseDownCategory = (event) => {
    event.preventDefault();
  };
console.log(item?.image);

  return (
    <MainContainer
      className={active ? "active" : ""}
      onClick={handleClickCategory}
      onMouseDown={handleMouseDownCategory}
    >
      <img src={item?.image ? item?.image : noImage} alt='' />
      <p>{item?.name ? truncateName(item.name) : "no name"}</p>
    </MainContainer>
  );
}

export default memo(CategoryComponent);
