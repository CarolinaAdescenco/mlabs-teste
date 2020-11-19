import styled, { css } from 'styled-components';
import { device } from '../../../styles/devices';

const socialMedia = {
  linkedin: css`
    background: #2e92ef;
    color: #ffffff;
  `,
  instagram: css`
    background: linear-gradient(187.5deg, #ef2ea2 5.81%, #e0a22b 109.34%);
    color: #ffffff;
  `,
};

export const CardWrapper = styled.div`
  border-radius: 4px;
  border: 1px solid #bdbdbd;

  @media ${device.lg} {
    margin-right: 20px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 13px;
`;

export const IconSocial = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 26px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  ${props => socialMedia[props.social]}
`;

export const InfoMedia = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h3`
  font-size: 14px;
  margin: 0px;
  color: #000;
`;

export const InfoSubtitle = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;

export const TitlePostWrapper = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: #4f4f4f;
  padding: 0 13px;
`;

export const ImageWrapper = styled.img`
  width: 368px;
  height: 368px;
`;
