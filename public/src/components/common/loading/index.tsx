import * as React from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  readonly height?: string;
  readonly position?: string;
}

export const cubeGridScaleDelay = keyframes`
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }

  35% {
    transform: scale3D(0, 0, 1);
  }
`;

export const LoaderWrapper = styled<Props, "div">("div")`
  position: ${({ position }) => `${position}`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => `${height}`};
  background: #e9eae2;
  z-index: 1;
`;

export const Loader = styled("div")`
  width: 50px;
  height: 50px;

  .square-1 {
    animation-delay: 0.2s;
  }

  .square-2 {
    animation-delay: 0.3s;
  }

  .square-3 {
    animation-delay: 0.4s;
  }

  .square-4 {
    animation-delay: 0.1s;
  }

  .square-5 {
    animation-delay: 0.2s;
  }

  .square-6 {
    animation-delay: 0.3s;
  }

  .square-7 {
    animation-delay: 0s;
  }

  .square-8 {
    animation-delay: 0.1s;
  }

  .square-9 {
    animation-delay: 0.2s;
  }
`;

export const Square = styled("div")`
  width: 33%;
  height: 33%;
  background-color: #7acec3;
  float: left;
  animation: ${cubeGridScaleDelay} 1.3s infinite ease-in-out;
`;

export default class Loading extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LoaderWrapper height={this.props.height} position={this.props.position}>
        <Loader>
          <Square className="square-1" />
          <Square className="square-2" />
          <Square className="square-3" />
          <Square className="square-4" />
          <Square className="square-5" />
          <Square className="square-6" />
          <Square className="square-7" />
          <Square className="square-8" />
          <Square className="square-9" />
        </Loader>
      </LoaderWrapper>
    );
  }
}
