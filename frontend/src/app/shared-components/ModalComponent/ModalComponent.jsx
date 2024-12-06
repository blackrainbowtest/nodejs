import React, { memo } from "react";
import { Modal, Box } from "@mui/material";
import styled from "styled-components";

const StyledBox = styled(Box)(
  ({ theme }) => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${theme.palette.background.secondary}!important;
    outline: none;
    border-radius: 5px;
  `
);

function ModalComponent({ open = false, handleClose = () => {}, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <StyledBox>{children}</StyledBox>
    </Modal>
  );
}

export default memo(ModalComponent);
