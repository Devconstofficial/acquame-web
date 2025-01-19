import { css } from "styled-components";

export const media = {
  extraSmall: (props) => css`
    @media only screen and (max-width: 320px) {
      ${props}
    }
  `,
  small: (props) => css`
    @media only screen and (min-width: 321px) and (max-width: 480px) {
      ${props}
    }
  `, 
  mobile: (props) => css`
    @media only screen and (min-width: 481px) and (max-width: 768px) {
      ${props}
    }
  `, 
  tablet: (props) => css`
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      ${props}
    }
  `,
  laptop: (props) => css`
    @media only screen and (min-width: 1025px) and (max-width: 1366px) {
      ${props}
    }
  `, 
  desktop: (props) => css`
    @media only screen and (min-width: 1367px) and (max-width: 1920px) {
      ${props}
    }
  `, 
  largeDesktop: (props) => css`
    @media only screen and (min-width: 1921px) {
      ${props}
    }
  `,
};
