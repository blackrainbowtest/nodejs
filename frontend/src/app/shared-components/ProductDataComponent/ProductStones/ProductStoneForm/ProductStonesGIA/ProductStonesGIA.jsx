import { Box, css, Switch } from "@mui/material";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";

function ProductStonesGIA({ stone, index }) {
  const { control } = useFormContext();

  return (
    <ContentContainer>
      <Controller
        name={`stones.${index}.GIA`}
        control={control}
        defaultValue={stone?.GIA ?? false}
        render={({ field, fieldState }) => (
          <CustomSwitch checked={field.value} onChange={field.onChange} />
        )}
      />
    </ContentContainer>
  );
}

export default memo(ProductStonesGIA);

const ContentContainer = styled(Box)(() =>
  css({
    width: "100%",
    display: "flex",
    alignItems: "center",
  })
);

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: "50px!important",
  height: "20px!important",
  padding: "0px!important",
  display: "flex",
  "& .MuiSwitch-switchBase": {
    minWidth: "28px!important",
    minHeight: "20px!important",
    borderRadius: "25px",
    padding: "0px!important",
    color: theme.palette.background.black,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: theme.palette.background.black,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.background.turnOn,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: "25px",
    backgroundColor: theme.palette.background.turnOn,
    opacity: 1,
  },
  "& .MuiSwitch-thumb": {
    minWidth: "29px!important",
    height: "20px!important",
    boxSizing: "border-box",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::before": {
      content: '"GIA"',
      fontSize: "12px",
      color: "#fff",
    },
  },
}));
