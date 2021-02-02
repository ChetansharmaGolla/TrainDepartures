import React, { Component } from "react";
class Text extends Component {
  render() {
    return <span className={this.props.className}>{this.props.value}</span>;
  }
}
export default Text;
