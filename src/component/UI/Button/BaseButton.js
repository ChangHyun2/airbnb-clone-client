import React from 'react';
import styled from '@emotion/styled';
import { TripleDotLoading } from '@UI/Loading';

const BaseButton = styled.button`
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  line-height: 1;
  background-color: #fff;
  font-size: inherit;
`;

const BaseLinkButton = styled.a`
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  line-height: 1;
  background-color: #fff;
  font-size: inherit;
`;

const Button = React.forwardRef(function button(
  {
    onClick,
    disabled = false,
    children,
    href,
    isSubmitting,
    LoadingComponent = TripleDotLoading,
    ...others
  },
  ref
) {
  return href ? (
    <BaseLinkButton
      ref={ref}
      href={href}
      onClick={onClick}
      disabled={disabled || isSubmitting}
      {...others}
    >
      {isSubmitting ? <LoadingComponent /> : children}
    </BaseLinkButton>
  ) : (
    <BaseButton
      ref={ref}
      onClick={onClick}
      disabled={disabled || isSubmitting}
      {...others}
    >
      {isSubmitting ? <LoadingComponent /> : children}
    </BaseButton>
  );
});

export default Button;
