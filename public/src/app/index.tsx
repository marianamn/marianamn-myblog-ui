import * as React from "react";
import { injectGlobal } from "styled-components";
import Layout from "../features/layout/index";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  @font-face {
    font-family: PlayfairDisplay-BoldItalic;
    src: url("assets/fonts/PlayfairDisplay-BoldItalic.ttf") format("opentype");
  }

  @font-face {
    font-family: PlayfairDisplay-Regular;
    src: url("assets/fonts/PlayfairDisplay-Regular.ttf") format("opentype");
  }

  @font-face {
    font-family: Poppins-Medium;
    src: url("assets/fonts/Poppins-Medium.ttf") format("opentype");
  }

  @font-face {
    font-family: Poppins-Regular;
    src: url("assets/fonts/Poppins-Regular.ttf") format("opentype");
  }

  @font-face {
    font-family: Poppins-SemiBold;
    src: url("assets/fonts/Poppins-SemiBold.ttf") format("opentype");
  }

  body {
    padding: 0;
    margin: 0;
    font-family: PlayfairDisplay-Regular, serif;
    font-size: 16px;
    overflow-x: hidden;
  }

  p {
    margin: 0;
  }

  @media only screen and (max-width: 600px) {
    body {
      font-size: 14px;
    }
  }
`;

export default class App extends React.Component<{}, {}> {
  render(): JSX.Element {
    return <Layout />;
  }
}
