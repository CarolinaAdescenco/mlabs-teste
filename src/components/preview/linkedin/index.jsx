import React from 'react';

import { Wrapper, Header, ImagePost, TitlePost } from '../shared';

import { Like, Comment, Share } from './icons';
import { ActionButtons, FooterWrapper, InfoComments } from './styles';

const LinkedinPreview = ({ data }) => {
  const { user, date, title, image } = data;

  return (
    <Wrapper>
      <Header social="linkedin" icon="fa-linkedin-in" user={user} date={date} />
      <TitlePost title={title} />
      <ImagePost image={image} />
      <FooterWrapper>
        <InfoComments>5 comentários</InfoComments>
        <hr />
        <ActionButtons>
          <Like />
          <Comment />
          <Share />
        </ActionButtons>
      </FooterWrapper>
    </Wrapper>
  );
};

export default LinkedinPreview;
