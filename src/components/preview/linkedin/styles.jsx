import styled from 'styled-components';

export const FooterWrapper = styled.div`
  hr {
    border: none;
    border-bottom: 1px solid #bdbdbd;
    margin: 0;
  }
`;

export const InfoComments = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #828282;
  font-weight: 400;
  padding: 9px 14px;
  margin: 0;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 14px;

  svg {
    margin-right: 14px;
  }
`;
