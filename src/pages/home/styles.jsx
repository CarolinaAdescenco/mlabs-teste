import styled from 'styled-components';

import { Main } from '../../styles/shared';
import { device } from '../../styles/devices';

export const Wrapper = styled(Main)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin: 85px 0px;

  @media ${device.lg} {
    margin: 143px 0;
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 49px;

  @media ${device.lg} {
    margin-bottom: 68px;
    max-width: 410px;
  }
`;
