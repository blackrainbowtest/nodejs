import { css } from "styled-components";
import { memo } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

import ActionButtonComponent from "app/shared-components/ActionButtonComponent";

function ButtonRemoveComponent({ index, callback = () => {} }) {

  return (
    <ActionButtonComponent
      label={<RemoveIcon />}
      customStyles={ActionButtonStyle}
      callback={callback}
    />
  );
}

export default memo(ButtonRemoveComponent);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 18px !important;
  min-height: 18px !important;
  padding: 0px !important;
  background-color: ${theme.palette.background.default}!important;
  color: ${theme.palette.text.primary}!important;
`;
