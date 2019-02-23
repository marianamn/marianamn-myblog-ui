import * as React from "react";
import styled, { keyframes } from "styled-components";

export const loadDelay = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled("div")`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #000000;
  z-index: 1;
  opacity: 0.6;
`;

export const Loader = styled("div")`
  font-size: 7px;
  margin: 0;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #808080;
  background: linear-gradient(to right, #808080 10%, rgba(128, 128, 128, 0) 42%);
  position: relative;
  animation: ${loadDelay} 1.4s infinite linear;
  transform: translateZ(0);

  &::before {
    content: "";
    width: 50%;
    height: 50%;
    background: #808080;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    background: #000000;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default class Loading extends React.Component<{}> {
  render(): JSX.Element {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }
}
