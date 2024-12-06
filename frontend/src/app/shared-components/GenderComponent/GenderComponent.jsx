import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import GenderIconComponent from "../GenderIconComponent";

const MainContainer = styled(Box)(
  ({ theme, displaytext }) => `
  min-height: 32px;
  min-width: ${displaytext !== "false" ? "125px" : "50px"};
  border-radius: 5px;
  padding: 4px;
  background: ${theme.palette.background.default}!important;
  color: ${theme.palette.secondary.button}!important;
  box-shadow: ${theme.palette.shadow.default};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  &:hover {
    background: ${theme.palette.background.input}!important;
  }
  &.active {
    color: ${theme.palette.primary.button}!important;
  }
`
);

function GenderComponent({ gender, active, callback, displayText = false }) {
  const handleClickGender = (event) => {
    event.stopPropagation();
    callback(gender);
  };

  const handleMouseDownGender = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer
      displaytext={displayText.toString()}
      className={active === gender ? "active" : ""}
      onClick={handleClickGender}
      onMouseDown={handleMouseDownGender}
    >
      <GenderIconComponent gender={gender} />
      {displayText ? gender ? <p>Female</p> : <p>Male</p> : null}
    </MainContainer>
  );
}

export default memo(GenderComponent);
