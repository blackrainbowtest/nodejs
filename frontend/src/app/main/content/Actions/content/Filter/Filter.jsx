import { memo, useCallback, useState } from "react";
import ActionButtonComponent from "app/shared-components/ActionButtonComponent/ActionButtonComponent";
import Label from "./content/Label";
import { css } from "styled-components";
import { Menu } from "@mui/material";
import MenuContent from "./content/MenuContent";

function FilterProduct() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleFilterClck = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  
  const handleClick = useCallback(() => {
    // NOTE: Additional verification can be added if necessary.
  }, []);

  return (
    <>
      <ActionButtonComponent
        callback={handleFilterClck}
        label={<Label />}
        customStyles={ActionButtonStyle}
        isOpen={open}
      />

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClick}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
      >
        <MenuContent isopen={open} />
      </Menu>
    </>
  );
}

export default memo(FilterProduct);

const ActionButtonStyle = ({ theme }) => css`
  min-height: 175px !important;
  min-width: 50px !important;
  border-radius: 0px 10px 10px 00px !important;
`;
