import React from "react";
import MAIN from "../../main-const";

class HWComponent extends React.Component {
  render() {
    return <div className="component"> {MAIN.helloWorld} </div>;
  }
}

export default HWComponent;
