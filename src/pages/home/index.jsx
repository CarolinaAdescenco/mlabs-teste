import React from 'react';

import Button from '../../components/button';
import Image from '../../images/new-post.svg';
import Layout from '../../components/layout';

import { Wrapper, ImageWrapper } from './styles';

const PageHome = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <ImageWrapper src={Image} alt="Agendar post" title="Agendar post" />
          <Button variation="orange" path="/agendamentos">
            Agendar post
          </Button>
        </Wrapper>
      </Layout>
    </>
  );
};

export default PageHome;
