import * as React from "react";
import styled from "styled-components";
import { Post } from "../../../../interfaces";
import PostItem from "../post-item";

export const RecentPostsContainer = styled("div")`
  text-align: center;
  padding: 0 10px;
`;

interface Props {
  readonly recentPosts: ReadonlyArray<Post>;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
}

export default class PostsLists extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <RecentPostsContainer>
        {this.props.recentPosts.map(p => (
          <PostItem
            key={p.id}
            post={p}
            isMobile={this.props.isMobile}
            isTablet={this.props.isTablet}
          />
        ))}
      </RecentPostsContainer>
    );
  }
}
