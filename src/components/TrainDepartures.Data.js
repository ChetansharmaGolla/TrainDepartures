import React, { PureComponent } from "react";
import { DENHAAGKEY } from "../api/Constants";
import TrainDepartures from "../api/TrainDepartures";
import DisplayTrainDepartures from "./DisplayTrainDepartures";

class TrainDeparturesData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      departures: [],
    };
  }

  componentDidMount() {
    const getStationsData = TrainDepartures.getStations();
    getStationsData.then((resp) => {
      console.log(resp);
      this.setState({
        stations: resp.data.data.filter(
          (station) =>
            station.namen.lang.toLowerCase() === DENHAAGKEY.toLowerCase()
        ),
      });
    });
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("in component update props state", oldProps, oldState);
    if (this.state.stations !== oldState.stations) {
      const { stations } = this.state;
      const { code: stationCode } = stations[0];
      const getDepartures = TrainDepartures.getDepartures(stationCode);
      getDepartures.then((resp) => {
        this.setState({ departures: resp.data.payload.departures });
      });
    }
  }

  render() {
    const { departures } = this.state;
    return <DisplayTrainDepartures departures={departures} />;
  }
}
export default TrainDeparturesData;
