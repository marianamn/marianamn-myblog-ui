import * as React from "react";

export interface Props {
  readonly isMobile?: boolean;
  readonly isTablet?: boolean;
}

export default class Footer extends React.Component<Props, {}> {
  render(): JSX.Element {
    return <div>Footer</div>;
  }
}
