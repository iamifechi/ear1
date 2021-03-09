import styled,{css} from 'styled-components';

const Pill= styled.span`
display:flex;
text-align:center;
flex-direction:row;
justify-content:center;
align-items:center;
width:50px;
min-width:50px;
padding:5px 10px;
border-radius:15px;
font-weight:500;
font-size:0.7em;
letter-spacing: -0.03em;
color:black;

  ${props => props.primary && css`
  background:#ffbb62;
  `}

  ${props => props.secondary && css`
  background:#ff8c62;
  `}
`

const Icon= styled.span`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border:2px solid #ffbb62;
color:white;
height:45px;
width:45px;
border-radius:50%;
font-size:16px

  ${props => props.primary && css`
   border-color:#ffbb62;
  `}

  ${props => props.secondary && css`
   border-color:#ff8c62;
  `}
`

export {Pill, Icon};
export const Fans = require('./Fans.js').default;
export const Influencer = require('./Influencer.js').default;
export const Features = require('./Features.js').default;
export const CALL_TO_ACTION = require('./CALL_TO_ACTION.js').default;
export const Nav = require('./Nav.js').default;
export const Footer = require('./Footer.js').default;
