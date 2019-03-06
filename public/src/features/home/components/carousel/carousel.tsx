import * as React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { ThumbUp } from "styled-icons/material/ThumbUp";
import { ThumbDown } from "styled-icons/material/ThumbDown";
import { Post } from "../../../../interfaces";
import { SlickWrapper } from "./carousel-styles";

export const ImgContainer = styled("div")`
  position: relative;
  width: 33%;
`;

export const HoverContainer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  color: transparent;
  border-bottom: 0 solid transparent;

  .separator {
    background: transparent;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .category {
      border-bottom: 2px solid #d4b15d;
    }

    .separator {
      background: white;
    }

    .icon {
      width: 15px;
      height: 13px;
      color: #d4b15d;
      margin-left: 10px;
    }
  }
`;

export const Category = styled("div")`
  font-family: Poppins-Medium, serif;
  font-size: 14px;
  text-align: center;
`;

export interface PostTitleProps {
  readonly isTablet: boolean;
}

export const PostTitle = styled<PostTitleProps, "div">("div")`
  font-family: PlayfairDisplay-BoldItalic, serif;
  font-size: 28px;
  text-align: center;
  margin: 0 5px 25px 5px;
  max-height: 88px;
  overflow: hidden;
  text-overflow: ${({ isTablet }) => isTablet && "ellipsis"};
  white-space: ${({ isTablet }) => isTablet && "nowrap"};
  width: ${({ isTablet }) => isTablet && "95%"};
`;

export const LikesContainer = styled("div")`
  font-family: Poppins-Regular, serif;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 15px;
  display: flex;
  align-items: center;
  height: 45px;

  .separator {
    height: 100%;
    width: 1px;
    margin: 0 10px;
  }
`;

export interface Props {
  readonly recentPosts: ReadonlyArray<Post>;
  readonly isTablet: boolean;
  readonly handleImagesLoaded: () => void;
}

// c_scale,h_1424,w_2144
// image resolutions 4288 × 2848
export default class Carousel extends React.Component<Props, {}> {
  render(): JSX.Element {
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: false,
      speed: 1500,
      autoplaySpeed: 5000,
      cssEase: "linear",
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    return (
      <SlickWrapper>
        <Slider {...settings}>
          {this.props.recentPosts &&
            this.props.recentPosts.map(p => {
              return (
                <ImgContainer key={p.picture}>
                  {/* tslint:disable-next-line:jsx-no-lambda */}
                  <img src={p.picture} onLoad={() => this.props.handleImagesLoaded()} />

                  <HoverContainer>
                    <Category className="category">{p.category}</Category>
                    <PostTitle isTablet={this.props.isTablet}>{p.title}</PostTitle>
                    <LikesContainer>
                      <span className="number">{p.likes}</span>
                      <ThumbUp className="icon like" />
                      <span className="separator" />
                      <span className="number">{p.dislikes}</span>
                      <ThumbDown className="icon dislike" />
                    </LikesContainer>
                  </HoverContainer>
                </ImgContainer>
              );
            })}
        </Slider>
      </SlickWrapper>
    );
  }
}
