import { Box } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import GenderComponent from "app/shared-components/GenderComponent";
import { useDispatch, useSelector } from "react-redux";
import { changeGender } from "features/Category/CategorySlice";

const MainContainer = styled(Box)`
  min-height: 80px;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

function Gender() {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state?.category?.gender);

  const genderChange = (g) => {
    dispatch(changeGender(g));
  };

  return (
    <MainContainer>
      {[true, false].map((g, i) => {
        return (
          <GenderComponent
            key={`gender_${i}`}
            gender={g}
            active={isActive}
            callback={genderChange}
          />
        );
      })}
    </MainContainer>
  );
}

export default memo(Gender);
