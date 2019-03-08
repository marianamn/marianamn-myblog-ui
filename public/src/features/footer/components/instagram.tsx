import * as React from "react";
import styled from "styled-components";
import { InstagramPost } from "../../../interfaces";
import { logoBlack } from "../../../constants";

export const InstagramWrapper = styled("div")`
  display: flex;
  position: relative;
  margin-top: 100px;
`;

export const ImageWrapper = styled("div")`
  width: 25%;
  position: relative;
`;

export const HoverWrapper = styled("div")`
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  color: transparent;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: white;

    .separator {
      background: white;
    }
  }
`;

export const Separator = styled("p")`
  width: 2px;
  height: 30px;
`;

export const Tags = styled<ImageContainerProps, "p">("p")`
  padding: 5px;
  min-height: 31px;
  font-family: PlayfairDisplay-BoldItalic, serif;
  font-size: ${({ isMobile, isTablet }) => (isMobile ? "12px" : isTablet ? "16px" : "22px")};
  word-break: break-word;
  text-align: center;
`;

interface ImageContainerProps {
  readonly url?: string;
  readonly isTablet?: boolean;
  readonly isMobile?: boolean;
}

export const ImageContainer = styled<ImageContainerProps, "div">("div")`
  background: ${({ url }) => url && `url(${url})`};
  width: 100%;
  height: ${({ isMobile, isTablet }) => (isMobile ? "150px" : isTablet ? "220px" : "300px")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Logo = styled<ImageContainerProps, "div">("div")`
  position: absolute;
  left: calc(50% - 40px);
  top: calc(50% - 40px);
  width: 80px;
  height: 80px;

  /* background: ${({ url }) => url && `url(${url})`}; */
  background: white;
  border-radius: 50%;
  border: 1px solid #e8e7e7;
`;

interface Props {
  readonly posts?: ReadonlyArray<InstagramPost>;
  readonly isTablet?: boolean;
  readonly isMobile?: boolean;
}

export default class InstagramContainer extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <InstagramWrapper>
        {this.props.posts &&
          this.props.posts.length > 0 &&
          this.props.posts.map(p => (
            <ImageWrapper key={`${p.image}-${p.createdAt}`}>
              <a href={p.link} target="_blank">
                <ImageContainer
                  url={p.image}
                  isTablet={this.props.isTablet}
                  isMobile={this.props.isMobile}
                />

                <HoverWrapper>
                  {!this.props.isMobile && <Separator className="separator" />}
                  <Tags isMobile={this.props.isMobile} isTablet={this.props.isTablet}>
                    {p.tags.length > 0 ? p.tags.map(t => `#${t}`).join(", ") : "#myblog"}
                  </Tags>
                  {!this.props.isMobile && <Separator className="separator" />}
                </HoverWrapper>
              </a>
            </ImageWrapper>
          ))}

        <Logo url={logoBlack} />
      </InstagramWrapper>
    );
  }
}
