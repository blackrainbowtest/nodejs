import { Button } from "@mui/material";
import { memo } from "react";
import styled, { css } from "styled-components";

const ActionContent = styled(({ customstyles, ...otherProps }) => (
  <Button {...otherProps} />
))(
  ({ theme, customstyles }) => css`
    min-width: inherit !important;
    min-height: 32px !important;
    padding: 12px 16px !important;
    border-radius: 25px !important;
    background: ${theme.palette.background.button} !important;
    color: ${theme.palette.common.white} !important;
    box-shadow: ${theme.palette.shadow.default} !important;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
    z-index: 1;
    ${customstyles}
  `
);

function ButtonProbComponent({
  callback = () => {},
  label = "Add",
  customStyles,
  prob,
  color,
  isActive,
}) {
  const handleMouseDownAction = (event) => {
    event.preventDefault();
  };

  const handleClickAction = (event) => {
    event.stopPropagation();
    if (typeof callback === 'function') {
      callback(event, { prob, color });
    }
  };

  const customStylesWithProbColor = ({ theme }) => css`
    background-color: ${color === 1
      ? theme.palette.background.gold1
      : color === 2
      ? theme.palette.background.gold2
      : theme.palette.background.gold3}!important;
    ${isActive && css`
      border: 2px solid ${color === 1
        ? theme.palette.border.gold1
        : color === 2
        ? theme.palette.border.gold2
        : theme.palette.border.gold3}!important;
    `}
  `;

  return (
    <ActionContent
      onClick={handleClickAction}
      onMouseDown={handleMouseDownAction}
      customstyles={(theme) => css`
        ${customStyles && customStyles(theme)}
        ${customStylesWithProbColor(theme)}
      `}
    >
      {label}
    </ActionContent>
  );
}

export default memo(ButtonProbComponent);
