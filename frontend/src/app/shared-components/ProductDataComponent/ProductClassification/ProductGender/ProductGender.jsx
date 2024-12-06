import { memo } from "react";
import GenderComponent from "app/shared-components/GenderComponent";
import styled from "styled-components";
import { Box } from "@mui/material";

const MainContainer = styled(Box)(
  ({ theme }) => `
  min-height: 80px;
  background: ${theme.palette.background.main}!important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`
);

function ProductGender({ props }) {
  const { gender, setGender } = props;

  const genderChange = (g) => {
    setGender(g);
  };
  return (
    <MainContainer>
      {[true, false].map((g, i) => {
        return (
          <GenderComponent
            key={`gender_${i}`}
            gender={g}
            active={gender}
            callback={genderChange}
          />
        );
      })}
    </MainContainer>
  );
}

export default memo(ProductGender);
