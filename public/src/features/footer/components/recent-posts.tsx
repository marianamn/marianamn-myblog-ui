import * as React from "react";
import styled from "styled-components";
import { Post } from "../../../interfaces";
import { footerLabels } from "../../../constants";

export const RecentPostsContainer = styled("div")`
  padding-top: 200px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Col = styled("div")`
  width: 32%;
`;

export const TitleWrapper = styled("div")`
  position: relative;
  font-family: PlayfairDisplay-BoldItalic, serif;
  border-bottom: 2px solid black;
  text-align: center;
  height: 70px;
`;

export const Title = styled("div")`
  font-size: 24px;
  opacity: 0.2;
`;

export const SubTitle = styled("div")`
  position: absolute;
  top: -35px;
  left: calc(50% - 35px);
  font-size: 70px;
`;

interface Props {
  readonly posts: ReadonlyArray<Post>;
}

export default class RecentPosts extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <RecentPostsContainer>
        <Col>
          <TitleWrapper>
            <Title>{footerLabels.recentPosts}</Title>
            <SubTitle>П</SubTitle>
          </TitleWrapper>

          {this.props.posts &&
            this.props.posts.map(p => (
              <div key={p.id}>
                <p>{p.title}</p>
                <p>{p.comments.length}</p>
                <p>{p.author.name}</p>
              </div>
            ))}
        </Col>

        <Col>
          <TitleWrapper>
            <Title>{footerLabels.followOnTwitter}</Title>
            <SubTitle>Т</SubTitle>
          </TitleWrapper>
        </Col>

        <Col>
          <TitleWrapper>
            <Title>{footerLabels.newMorePosts}</Title>
            <SubTitle>Н</SubTitle>
          </TitleWrapper>
        </Col>
      </RecentPostsContainer>
    );
  }
}
