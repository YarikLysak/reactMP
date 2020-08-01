import React from "react";
import MAIN from "../../main-const";

class HWPureComponent extends React.PureComponent {
  render() {
    return <div className="component"> {MAIN.helloWorld} </div>;
  }
}

export default HWPureComponent;
