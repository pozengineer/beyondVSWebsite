import React, { createRef, Component } from "react";
import MyNavBar from "../MyNavBar/myNavBar";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.wrapper = createRef();
  }

  render () {
    return (
      <div ref={this.wrapper}>
        <MyNavBar>{this.props.children}</MyNavBar>
      </div>
    );
  }
}

export default Wrapper;