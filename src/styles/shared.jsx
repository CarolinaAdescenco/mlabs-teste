import styled from 'styled-components';
import { device } from './devices';

export const Container = styled.div`
  padding: 0 20px;

  @media ${device.md} {
    padding: 0 40px;
  }
`;

export const Main = styled.main`
  position: absolute;
  top: 80px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  max-width: 90%;

  @media ${device.md} {
    padding: 0 40px;
  }
`;
