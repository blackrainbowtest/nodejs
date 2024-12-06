import ActionButtonComponent from "app/shared-components/ActionButtonComponent";
import { memo } from "react";
import AddIcon from "@mui/icons-material/Add";
import { css } from "styled-components";

function ButtonAddComponent({callback = () => {}}) {
  return (
    <ActionButtonComponent
      label={<AddIcon />}
      customStyles={ActionButtonStyle}
      callback={callback}
    />
  );
}

export default memo(ButtonAddComponent);

const ActionButtonStyle = ({ theme }) => css`
  min-width: 18px !important;
  min-height: 18px !important;
  padding: 0px !important;
  background-color: ${theme.palette.background.default}!important;
  color: ${theme.palette.text.primary}!important;
`;
