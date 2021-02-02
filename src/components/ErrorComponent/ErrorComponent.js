import React, { Component } from "react";
import Text from "../TextComponent/Text";
import "./error.css";

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderError = (
      <div className="errorcontainer">
        <Text value={this.props.errorMessage} />
      </div>
    );
    return renderError;
  }
}
export default ErrorComponent;
