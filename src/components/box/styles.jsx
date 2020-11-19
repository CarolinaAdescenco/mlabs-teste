import styled from 'styled-components';
import { device } from '../../styles/devices';

export const Wrapper = styled.aside`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 40px;

  @media ${device.lg} {
    width: ${props => (props.half ? '48%' : '100%')};
  }
`;

export const Content = styled.div`
  padding: 13px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #333333;
  margin: 0;
  padding: 4px 10px;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
`;
