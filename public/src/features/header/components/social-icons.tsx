import * as React from "react";
import styled from "styled-components";
import { FacebookF } from "styled-icons/fa-brands/FacebookF";
import { Twitter } from "styled-icons/fa-brands/Twitter";
import { Instagram } from "styled-icons/fa-brands/Instagram";
import { SocialMediaLinks } from "../../../interfaces";

export interface SocialIconsContainerProps {
  readonly isMobile: boolean;
}

export const SocialIconsContainer = styled<SocialIconsContainerProps, "section">("section")`
  display: flex;
  justify-content: space-around;
  width: ${({ isMobile }) => isMobile && "25%"};
`;

export interface IconProps {
  readonly color: string;
  readonly hoverColor: string;
}

export const Icon = styled<IconProps, "span">("span")`
  margin-right: 30px;

  .icon {
    width: 14px;
    height: 14px;
    color: #000000;
    color: ${({ color }) => `${color}`};

    &:hover {
      cursor: pointer;
      color: ${({ hoverColor }) => `${hoverColor}`};
    }
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Link = styled("a")`
  &:focus {
    outline: none;
  }
`;

export interface Props {
  readonly socialMediaLinks: SocialMediaLinks;
  readonly color: string;
  readonly hoverColor: string;
  readonly isMobile?: boolean;
}

export const SocialIcons = (props: Props) => {
  return (
    <SocialIconsContainer isMobile={props.isMobile}>
      <Icon color={props.color} hoverColor={props.hoverColor}>
        <Link href={props.socialMediaLinks.facebook} target="blank">
          <FacebookF className="icon" />
        </Link>
      </Icon>

      <Icon color={props.color} hoverColor={props.hoverColor}>
        <Link href={props.socialMediaLinks.twitter} target="blank">
          <Twitter className="icon" />
        </Link>
      </Icon>

      <Icon color={props.color} hoverColor={props.hoverColor}>
        <Link href={props.socialMediaLinks.instagram} target="blank">
          <Instagram className="icon" />
        </Link>
      </Icon>
    </SocialIconsContainer>
  );
};
