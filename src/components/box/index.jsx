import React from 'react';
import { Wrapper, Content, Title, Divider } from './styles';

const Box = ({ children, title, half }) => {
  return (
    <Wrapper half={half}>
      <Title>{title}</Title>
      <Divider />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Box;
