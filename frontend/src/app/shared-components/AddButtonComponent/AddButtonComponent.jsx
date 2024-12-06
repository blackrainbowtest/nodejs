import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { memo } from "react";
import styled from "styled-components";

const MainContainer = styled(Button)`
  min-width: inherit!important;
  min-height: inherit!important;
  padding: 0px!important;
  background: ${(props) => props.theme.palette.background.default}!important;
  color: ${(props) => props.theme.palette.text.primary}!important;
  border: none !important;
  gap: 20px;
`;

function AddButtonComponent({ id, callback }) {
  const handleClickAddButton = (event) => {
    event.stopPropagation();
    callback(event);
  };

  const handleMouseDownAddButton = (event) => {
    event.preventDefault();
  };

  return (
    <MainContainer
      aria-describedby={id}
      variant='outlined'
      onClick={handleClickAddButton}
      onMouseDown={handleMouseDownAddButton}
    >
      <AddIcon />
    </MainContainer>
  );
}

export default memo(AddButtonComponent);
