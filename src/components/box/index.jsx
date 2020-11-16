import React from 'react';
import { Wrapper, Content, Title, Divider } from './styles';

const Box = ({ children, title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Box;
