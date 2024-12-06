import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import GenderComponent from "app/shared-components/GenderComponent";

const ActionContent = styled(Box)(
  ({ theme }) => `
      width: 100%;
      min-height: 32px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      font-size: 1.1rem;
      text-align: center;
      display: flex;
      justify-content: space-between;
    `
);

function GednerComponent({ gender, setGender }) {
  const genderChange = (g) => {
    setGender(g);
  };
  return (
    <ActionContent>
      {[true, false].map((g, i) => {
        return (
          <GenderComponent
            key={`gender_${i}`}
            gender={g}
            active={gender}
            callback={genderChange}
            displayText={true}
          />
        );
      })}
    </ActionContent>
  );
}

export default memo(GednerComponent);
