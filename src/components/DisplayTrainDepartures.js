import React, { PureComponent } from "react";
import Text from "./Text";
import "./displaydepartures.css";
import moment from "moment";
class DisplayTrainDepartures extends PureComponent {
  render() {
    const { departures } = this.props;
    if (!departures.length) return <div> NO DATA RETRIEVED</div>;
    console.log("we are in the display component", this.props);
    return departures.map((departureTrain) => {
      return (
        <div className="train_departures_container">
          <div className="departure_time_direction_flex">
            <Text
              value={
                moment(departureTrain.plannedDateTime)
                  .format("LT")
                  .split("=")[0]
              }
            />
            <Text
              className="direction--font"
              value={departureTrain.direction}
            />
          </div>
          <div className="departure_platform_type_flex">
            <Text value={departureTrain.plannedTrack} />
            <Text value={departureTrain.product.categoryCode} />
          </div>
        </div>
      );
    });
  }
}
export default DisplayTrainDepartures;
