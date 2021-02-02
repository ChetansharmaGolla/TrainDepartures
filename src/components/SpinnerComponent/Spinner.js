import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "./spinner.css";
class Spinner extends Component {
  render() {
    return (
      <div className="spinnercontainer">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={800}
          width={600}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
export default Spinner;
