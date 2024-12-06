import { memo } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styled from "styled-components";

const MainContent = styled(`div`)(
  ({ theme }) => `
      writing-mode: vertical-lr;
      text-orientation: upright;
      position: relative;
      color: ${theme.palette.common.white}
    `
);

const NavigateNextIconAbsolute = styled(NavigateNextIcon)(
    ({ theme }) => `
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -15px;
    `
)

function Label() {
  return (
    <MainContent>
      <FilterAltIcon />
      <NavigateNextIconAbsolute />
      Filter
    </MainContent>
  );
}

export default memo(Label);
