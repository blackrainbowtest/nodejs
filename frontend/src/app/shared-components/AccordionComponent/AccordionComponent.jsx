import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { memo } from "react";
import styled from "styled-components";

function AccordionComponent({ header, content }) {
  return (
    <CustomAccordion>
      <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
        {header}
      </CustomAccordionSummary>
      <CustomAccordionDetails>{content}</CustomAccordionDetails>
    </CustomAccordion>
  );
}

export default memo(AccordionComponent);

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  background: `${theme.palette.background.dark}!important`,
  border: "none!important",
  boxShadow: "none!important",
  minHeight: "32px!important",
  "&& .MuiAccordionSummary-content": {
    margin: "0px!important",
  },
}));

const CustomAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  border: "none!important",
  boxShadow: "none!important",
  backgroundColor: "transparent!important",
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  width: "100%",
  border: "none!important",
  boxShadow: "none!important",
  backgroundColor: "transparent!important",
  "&.MuiAccordion-root:before": {
    boxShadow: "none!important",
    backgroundColor: "transparent!important",
  },
  "&.Mui-expanded": {
    margin: "0 !important",
  },
}));
