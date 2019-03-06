import * as React from "react";
import styled from "styled-components";
import { homePageGreeting } from "../../../../constants";
import { Title } from "../../../../common/title";

export const GreetingContainer = styled("section")`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 130px;
  padding: 0 5px;
`;

export const Content = styled("p")`
  font-family: PlayfairDisplay-Regular, serif;
  font-size: 16px;
`;

export default class GreetingSection extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <GreetingContainer>
        <Title text={homePageGreeting.title} />
        <Content>{homePageGreeting.content}</Content>
      </GreetingContainer>
    );
  }
}
