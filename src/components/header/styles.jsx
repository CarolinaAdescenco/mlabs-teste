import styled, { css } from 'styled-components';
import { device } from '../../styles/devices';

export const HeaderWrapper = styled.header`
  background: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.md} {
    padding: 0 40px;
  }
`;

export const LogoWrapper = styled.img`
  width: 115px;
  display: none;

  @media ${device.md} {
    display: flex;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarWrapper = styled.img`
  width: 45px;
`;

export const UserName = styled.span`
  font-size: 14px;
  line-height: 21px;
  margin-left: 8px;
  text-align: center;
  display: none;

  @media ${device.md} {
    display: flex;
  }
`;

export const Hamburguer = styled.div`
  cursor: pointer;

  @media ${device.md} {
    display: none;
  }

  span {
    width: 25px;
    height: 3px;
    border-radius: 5px;
    background-color: #333333;
    display: block;
    margin: 7px auto;
    -webkit-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }

  ${props =>
    props.open
      ? css`
          -webkit-transition: all 0.1s ease-in-out;
          -o-transition: all 0.1s ease-in-out;
          transition: all 0.1s ease-in-out;
          -webkit-transition-delay: 0.1s;
          -o-transition-delay: 0.1s;
          transition-delay: 0.1s;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);

          span:nth-child(2) {
            width: 0px;
          }

          span:nth-child(1),
          span:nth-child(3) {
            -webkit-transition-delay: 0.2s;
            -o-transition-delay: 0.2s;
            transition-delay: 0.2s;
          }

          span:nth-child(1) {
            -webkit-transform: translateY(10px);
            -ms-transform: translateY(10px);
            -o-transform: translateY(10px);
            transform: translateY(10px);
          }

          span:nth-child(3) {
            -webkit-transform: translateY(-10px) rotate(90deg);
            -ms-transform: translateY(-10px) rotate(90deg);
            -o-transform: translateY(-10px) rotate(90deg);
            transform: translateY(-10px) rotate(90deg);
          }
        `
      : ''}
`;
