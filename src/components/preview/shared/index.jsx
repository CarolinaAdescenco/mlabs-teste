import React from 'react';

import {
  HeaderWrapper,
  IconSocial,
  InfoMedia,
  InfoTitle,
  InfoSubtitle,
  TitlePostWrapper,
  ImageWrapper,
  CardWrapper,
} from './styles';

const Wrapper = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const Header = ({ icon, user, date, social }) => {
  return (
    <HeaderWrapper>
      <IconSocial social={social}>
        <i className={`fab ${icon}`} />
      </IconSocial>
      <InfoMedia>
        <InfoTitle>{user}</InfoTitle>
        <InfoSubtitle>{date}</InfoSubtitle>
      </InfoMedia>
    </HeaderWrapper>
  );
};

const TitlePost = ({ title }) => {
  return <TitlePostWrapper>{title}</TitlePostWrapper>;
};

const ImagePost = ({ image }) => {
  return <ImageWrapper src={image} />;
};

export { Wrapper, Header, TitlePost, ImagePost };
