import React from 'react';
import Header from '../header';
import { Content, Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
