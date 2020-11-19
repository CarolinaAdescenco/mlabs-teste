import styled, { css } from 'styled-components';
import { device } from '../../styles/devices';

const status = {
  enabled: css`
    label {
      background: #fff;
      color: #333333;
      cursor: pointer;

      &:hover {
        background: #fff3e0;
        border: 1px solid #ef9f2e;
        color: #ef9f2e;
      }
    }

    input:checked + label {
      background: linear-gradient(135deg, #ef9f2e 25%, #e02b4b 105.56%);
      border: 1px solid #ef9f2e;
      color: #ffffff;
    }
  `,
  disabled: css`
    label {
      background: #dddddd;
      color: #989898;
      cursor: not-allowed;
    }
  `,
};

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`;

export const Option = styled.div`
  ${props => status[props.status]};

  label {
    font-size: 18px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 1px solid #9e9e9e;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px 0 0;
    transition: all 0.2s;
  }

  input {
    display: none;
  }
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.lg} {
    width: 49%;
  }
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

export const Textarea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  padding: 11px 18.05px;
  border-radius: 4px;
  width: 100%;
`;

export const BoxPreview = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: scroll;
  display: flex;
`;
