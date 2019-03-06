import * as React from "react";
import styled from "styled-components";
import { Comment } from "styled-icons/fa-regular/Comment";
import { User } from "styled-icons/fa-solid/User";
import { history } from "../../../../history";
import { Post } from "../../../../interfaces";
import { Title } from "../../../../common/title";
import { getDate } from "../../../../utils/dates";
import { textCharsToShow, homeLabels } from "../../../../constants";

interface PostContainerProps {
  readonly url?: string;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
}

export const PostContainer = styled<PostContainerProps, "div">("div")`
  width: ${({ isMobile, isTablet }) => (isMobile ? "100%" : isTablet ? "100%" : "80%")};
  margin: 0 auto;
`;

export const ImageContainer = styled<PostContainerProps, "div">("div")`
  position: relative;
  background: ${({ url }) => url && `url(${url})`};
  width: 100%;
  height: ${({ isMobile, isTablet }) => (isMobile ? "350px" : isTablet ? "500px" : "550px")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Separator = styled("div")`
  position: absolute;
  bottom: -50px;
  left: calc(50% - 1px);
  height: 100px;
  width: 2px;
  background: #000000;
`;

export const TitleContainer = styled("div")`
  padding-top: 50px;
`;

export const Date = styled("p")`
  font-family: PlayfairDisplay-Regular, serif;
  font-size: 14px;
  color: #cca335;
`;

export const Content = styled<PostContainerProps, "p">("p")`
  font-family: PlayfairDisplay-Regular, serif;
  font-size: 16px;
  width: ${({ isMobile, isTablet }) => (isMobile || isTablet ? "100%" : "70%")};
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 35px;
`;

export const BtnSection = styled<PostContainerProps, "div">("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Poppins-Regular, serif;
  color: #a0a0a0;
  font-size: 12px;
  width: ${({ isMobile, isTablet }) => (isMobile || isTablet ? "100%" : "90%")};
  margin: 0 auto;
  margin-bottom: 100px;
  border-bottom: 1px solid #e9e9e9;

  .icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
`;

export const CommentsContainer = styled("div")`
  width: 37.5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ReadMore = styled("div")`
  width: 25%;
  color: #000000;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  padding: 7px 15px;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #cca335;
    margin-bottom: -2px;
  }
`;

export const AuthorContainer = styled("div")`
  width: 37.5%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .user {
    width: 13px;
    height: 15px;
    margin: 0 10px 0 0;
  }
`;

interface Props {
  readonly post: Post;
  readonly isMobile: boolean;
  readonly isTablet: boolean;
}

export default class PostItem extends React.Component<Props, {}> {
  render(): JSX.Element {
    const post = this.props.post;

    return (
      <PostContainer isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
        <ImageContainer
          url={post.picture}
          isMobile={this.props.isMobile}
          isTablet={this.props.isTablet}
        >
          <Separator />
        </ImageContainer>

        <TitleContainer>
          <Title text={post.title} />
          <Date>{getDate(post.createdAt)}</Date>
        </TitleContainer>

        <Content isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
          {`${post.content.substring(0, textCharsToShow)}...`}
        </Content>

        <BtnSection isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
          <CommentsContainer>
            <Comment className="icon" />
            <span>{`${post.comments.length} ${homeLabels.comments}`}</span>
          </CommentsContainer>
          {/* tslint:disable-next-line:jsx-no-lambda */}
          <ReadMore onClick={() => this.redirectToDetailedPage(post.id)}>
            {homeLabels.readMore}
          </ReadMore>
          <AuthorContainer>
            <User className="user" />
            <span>{`${homeLabels.by} ${post.author.name}`}</span>
          </AuthorContainer>
        </BtnSection>
      </PostContainer>
    );
  }

  private readonly redirectToDetailedPage = (id: string) => {
    history.push(`/posts/${id}`);
  };
}
