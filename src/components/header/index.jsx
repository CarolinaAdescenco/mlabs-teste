import React from 'react';

import Logo from '../../images/logo-mlabs.png';
import Avatar from '../../images/avatar.png';
import {
  HeaderWrapper,
  LogoWrapper,
  UserWrapper,
  AvatarWrapper,
  UserName,
  Hamburguer,
} from './styles';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <HeaderWrapper>
      <LogoWrapper src={Logo} alt="mLabs" title="mLabs" />

      <Hamburguer onClick={() => setOpen(!open)} open={open}>
        <span />
        <span />
        <span />
      </Hamburguer>

      <UserWrapper>
        <AvatarWrapper
          src={Avatar}
          alt="Anselmo Carlos"
          title="Anselmo Carlos"
        />
        <UserName>Anselmo Carlos</UserName>
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;
