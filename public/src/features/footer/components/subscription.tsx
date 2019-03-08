import * as React from "react";
import styled from "styled-components";
import { footerLabels } from "../../../constants";

interface SubscriptionProps {
  readonly isTablet?: boolean;
  readonly isMobile?: boolean;
}

export const SubscriptionContainer = styled<SubscriptionProps, "section">("section")`
  background: #f2f2f2;
  padding: ${({ isMobile }) => (isMobile ? "50px 10px" : "50px 0")};
`;

export const SubscriptionSubContainer = styled<SubscriptionProps, "div">("div")`
  width: ${({ isMobile, isTablet }) => (isMobile ? "100%" : isTablet ? "90%" : "80%")};
  margin: 0 auto;
`;

export const Row = styled<SubscriptionProps, "div">("div")`
  display: flex;
  align-items: ${({ isMobile, isTablet }) => !isMobile && !isTablet && "center"};
  flex-direction: ${({ isMobile, isTablet }) => (isMobile || isTablet ? "column" : "row")};

  &:first-of-type {
    margin-bottom: ${({ isMobile, isTablet }) => (isMobile || isTablet ? "15px" : "40px")};
    align-items: baseline;
  }
`;

export const Title = styled("p")`
  font-family: PlayfairDisplay-BoldItalic, serif;
  font-size: 32px;
  margin-right: 25px;
`;

export const Input = styled("input")`
  height: 45px;
  width: 50%;
  padding: 0 5px;
  border: none;
  margin-right: 30px;

  &:focus {
    outline: none;
  }
`;

export const SubscribeBtn = styled<SubscriptionProps, "p">("p")`
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: ${({ isMobile, isTablet }) => (isMobile || isTablet) && "15px"};

  &:hover {
    cursor: pointer;
    color: #cca335;
  }
`;

interface Props {
  readonly isTablet?: boolean;
  readonly isMobile?: boolean;
}

export default class Subscription extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <SubscriptionContainer isMobile={this.props.isMobile}>
        <SubscriptionSubContainer isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
          <Row isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
            <Title>{footerLabels.subscribeTitle}</Title>
            <p>{footerLabels.subscribeText}</p>
          </Row>
          <Row isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
            <Input type="email" placeholder={footerLabels.emailText} />
            <SubscribeBtn isTablet={this.props.isTablet} isMobile={this.props.isMobile}>
              {footerLabels.subscribeBtn}
            </SubscribeBtn>
          </Row>
        </SubscriptionSubContainer>
      </SubscriptionContainer>
    );
  }
}
