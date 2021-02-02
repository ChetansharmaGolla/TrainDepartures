import React, { PureComponent } from "react";
import { DENHAAGKEY, ERROR_MESSAGE } from "../../api/Constants";
import TrainDepartures from "../../api/TrainDepartures";
import DisplayTrainDepartures from "./DisplayTrainDepartures";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Spinner from "../SpinnerComponent/Spinner";

class TrainDeparturesData extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      departures: [],
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    const getStationsData = TrainDepartures.getStations();

    getStationsData
      .then((resp) => {
        this.setState({
          stations: this.filterStation(resp.data.data),
          loading: true,
        });
      })
      .catch((error) => this.setState({ error: true, loading: false }));
  }

  componentDidUpdate(oldState) {
    if (this.state.stations !== oldState.stations) {
      const { stations = [] } = this.state;

      if (!stations.length) {
        this.setState({ error: true, loading: false });
      } else {
        const { code: stationCode } = stations[0];
        const getDepartures = TrainDepartures.getDepartures(stationCode);
        getDepartures
          .then((resp) => {
            this.setState({
              loading: false,
              departures: resp.data.payload.departures,
            });
          })
          .catch((error) => this.setState({ error: true, loading: false }));
      }
    }
  }

  render() {
    const { departures, loading, error } = this.state;
    console.log(error);

    if (loading) return <Spinner />;

    if (error) return <ErrorComponent errorMessage={ERROR_MESSAGE} />;

    return <DisplayTrainDepartures departures={departures} />;
  }

  filterStation = (stations) =>
    stations.filter(
      (station) => station.namen.lang.toLowerCase() === DENHAAGKEY.toLowerCase()
    );
}
export default TrainDeparturesData;
