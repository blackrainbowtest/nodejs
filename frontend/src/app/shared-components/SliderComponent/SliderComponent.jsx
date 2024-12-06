import { Box, Slider, TextField } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import { InputAdornment } from "@mui/material";

function SliderComponent({
  min = 0,
  max = 100,
  valueText = "",
  adornment = "",
  title = "",
  value,
  setValue,
}) {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTextFieldChange = (index, event) => {
    const newValue = [...value];
    newValue[index] = Number(event.target.value);

    if (newValue[0] < min) newValue[0] = min;
    if (newValue[1] > max) newValue[1] = max;
    setValue(newValue);
  };

  return (
    <MainContainer>
      <TitleContainer>{title}</TitleContainer>
      <SliderContainer
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={(value) => `${value}${valueText}`}
        min={min}
        max={max}
      />
      <ContentContainer>
        <StyledTextField
          type='number'
          label='From'
          value={value[0]}
          onChange={(event) => handleTextFieldChange(0, event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>{adornment}</InputAdornment>
            ),
          }}
        />
        <StyledTextField
          type='number'
          label='To'
          value={value[1]}
          onChange={(event) => handleTextFieldChange(1, event)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>{adornment}</InputAdornment>
            ),
          }}
        />
      </ContentContainer>
    </MainContainer>
  );
}

export default memo(SliderComponent);

const MainContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0px",
}));

const TitleContainer = styled(Box)(() => ({
  width: "100%",
  fontWeight: "700",
  fontSize: "20px",
}));

const ContentContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

const SliderContainer = styled(Slider)(() => ({
  width: "90%!important",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100px!important",
  minHeight: "30px!important",
  "& .MuiInputBase-input": {
    fontSize: "14px",
    height: "100%",
    padding: "7px 8px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "12px",
  },
}));
