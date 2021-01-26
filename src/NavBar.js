import React from 'react';
import { css, keyframes } from '@emotion/react';
import { Link } from '@reach/router';
import colors from './colors';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: 15px;

        &:hover {
          text-decoration: underline;
        }
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
        aria-label="logo"
        role="img"
      >
        😬
      </span>
    </header>
  )
}

export default NavBar;
