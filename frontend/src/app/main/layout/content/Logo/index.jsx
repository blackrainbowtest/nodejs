import { memo } from "react";
import styled from "styled-components";
import logo from "logo.svg";

const ImageContainer = styled.div`
  & img {
    width: 110px;
    height: 61px;
  }

  @media (max-width: 768px) {
    & img {
      width: 62px;
      height: 34px;
    }
  }

  @media (max-width: 320px) {
    & img {
      width: 50px;
      height: 27px;
    }
  }
`;

function Logo() {
  return (
    <ImageContainer>
      <img src={logo} alt='' />
    </ImageContainer>
  );
}

export default memo(Logo);
