import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonWrapper } from './styles';

const Button = ({ children, isLoading, onClick, variation, path }) => {
  return (
    <>
      {path ? (
        <ButtonWrapper variation={variation} as={Link} to={path}>
          {children}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper variation={variation} as="button" onClick={onClick}>
          {isLoading ? 'carregando...' : children}
        </ButtonWrapper>
      )}
    </>
  );
};

export default Button;
