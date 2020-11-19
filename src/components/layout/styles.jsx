import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 95%;
  margin: auto;

  @media ${device.lg} {
    margin: 130px auto;
  }
`;
