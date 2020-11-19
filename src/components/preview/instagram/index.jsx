import React from 'react';

import { Wrapper, Header, ImagePost, TitlePost } from '../shared';

import { Save, Comment, Like } from './icons';
import { PostActions, FooterWrapper } from './styles';

const InstagramPreview = ({ data }) => {
  const { user, date, title, image } = data;

  return (
    <Wrapper>
      <Header social="instagram" icon="fa-instagram" user={user} date={date} />
      <ImagePost image={image} />

      <FooterWrapper>
        <PostActions>
          <Like />
          <Comment />
          <Save />
        </PostActions>
      </FooterWrapper>
      <TitlePost title={title} />
    </Wrapper>
  );
};

export default InstagramPreview;
