import React from 'react';

import Header from '../../components/header';
import Button from '../../components/button';
import Image from '../../images/new-post.svg';

import { Wrapper, ImageWrapper } from './styles';

const PageHome = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ImageWrapper src={Image} alt="Agendar post" title="Agendar post" />
        <Button variation="orange" path="/agendamentos">
          Agendar post
        </Button>
      </Wrapper>
    </>
  );
};

export default PageHome;
