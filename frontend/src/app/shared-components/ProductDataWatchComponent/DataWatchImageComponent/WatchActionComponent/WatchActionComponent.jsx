import { Box } from "@mui/material";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { memo } from "react";
import styled, { css } from "styled-components";

function WatchActionComponent({ canSell }) {
  return (
    <MainContainer>
      {canSell ? (
        <ActionButtonComponent label='Sell' customStyles={ActionButtonStyle} />
      ) : (
        "Cant sell"
      )}
    </MainContainer>
  );
}

export default memo(WatchActionComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
}));

const ActionButtonStyle = ({ theme }) => css`
  min-width: 160px !important;
  min-height: 32px !important;
  border-radius: 5px !important;
  background: ${theme.palette.background.green}!important;
`;
