import { memo } from 'react';
import Gender from './content/Gender';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Category from './content/Category/Category';

const MainContainer = styled(Box)`
  width: 100%;
  min-height: 80px;
  padding: 30px 0px 0px 0px;
  overflow: hidden;
  background: ${(props) => props.theme.palette.background.main}!important;
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Categorys() {
    return(
        <MainContainer>
            <Gender />
            <Category />
        </MainContainer>
    )
}

export default memo(Categorys);