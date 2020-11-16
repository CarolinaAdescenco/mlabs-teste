import styled, { css } from 'styled-components';

const buttonVariations = {
  primary: css`
    background: transparent;
    border: none;
    color: #2f80ed;
  `,
  orange: css`
    background: #f2994a;
    border: 1px solid #e0812c;
    color: #fff;
  `,
};

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  line-height: 24px;
  height: 45px;
  text-decoration: none;
  padding: 0 12px;
  outline: none;
  width: 100%;
  max-width: 184px;

  ${props => buttonVariations[props.variation || 'primary']};
`;
