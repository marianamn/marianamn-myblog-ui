import * as React from "react";
import styled from "styled-components";
import { Post } from "../../../../interfaces";
import Slider from "react-slick";
import { SlickWrapper } from "./carousel-styles";
import { ThumbUp } from "styled-icons/material/ThumbUp";
import { ThumbDown } from "styled-icons/material/ThumbDown";


export const ImgContainer = styled("div")`
  position: relative;
`

export const HoverContainer = styled("div")`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  color: transparent;
  border-bottom: 0px solid transparent;

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
      border-bottom: 2px solid #D4B15D;
    }

    .separator {
      background: white;
    }

    .icon {
      width: 15px;
      height: 13px;
      color: #D4B15D;
      margin-left: 10px;
    }
  }
`

export const Category = styled("div")`
  font-family: Poppins-Medium, serif;
  font-size: 14px;
  text-align: center;
`

export const PostTitle = styled("div")`
  font-family: PlayfairDisplay-BoldItalic, serif;
  font-size: 28px;
  text-align: center;
`

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
`

export interface Props {
  readonly recentPosts: ReadonlyArray<Post>;
}

//4288 × 2848
export default class Carousel extends React.Component<Props, {}> {
  render(): JSX.Element {
    const settings = {
      infinite: true,
      dots: true,
      arrows: false,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    // {...settings}

    return (
      <div>
        <SlickWrapper>
          <Slider {...settings}>
            {this.props.recentPosts && this.props.recentPosts.map(p => {
              return (
                <ImgContainer key={p.picture}>
                  <img src={p.picture} />

                  <HoverContainer>
                    <Category className="category">{p.category}</Category>
                    <PostTitle>{p.title}</PostTitle>
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
      </div>
    );
  }
}
