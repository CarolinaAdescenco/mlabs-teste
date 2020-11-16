import styled, { css } from 'styled-components';
import EmojiField from 'emoji-picker-textfield';
import { Main } from '../../styles/shared';
import { device } from '../../styles/devices';

const status = {
  enabled: css`
    background: #fff;
    color: #333333;
    cursor: pointer;

    &:hover {
      background: #fff3e0;
      border: 1px solid #ef9f2e;
      color: #ef9f2e;
    }
  `,
  disabled: css`
    background: #dddddd;
    color: #989898;
  `,
};

export const Wrapper = styled(Main)`
  display: flex;
`;

export const Button = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 1px solid #9e9e9e;
  outline: none;
  font-size: 18px;
  margin: 0 15px 0 0;
  transition: all 0.2s;

  ${props => status[props.status]};
  ${props =>
    props.selected
      ? css`
          background: linear-gradient(135deg, #ef9f2e 25%, #e02b4b 105.56%);
          border: 1px solid #ef9f2e;
          color: #ffffff;
        `
      : ''}
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  max-width: 650px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  border: 1px solid #949494;
  height: 42px;
  width: 124px;
  border-radius: 4px;
  margin: 0 14.5px;
`;

export const Textarea = styled(EmojiField)`
  .emoji-trigger {
    background: red;
  }
`;
