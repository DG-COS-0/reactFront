import styled, { keyframes } from "styled-components";

const animLoader = keyframes`
 0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
`;
const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  display: inline-block;
  position: relative;
  margin: auto;
  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;

    border: 2px solid var(--color-emerald-500);
    position: absolute;
    left: 0;
    top: 0;
    animation: ${animLoader} 1s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }
`;

export default Loader;
