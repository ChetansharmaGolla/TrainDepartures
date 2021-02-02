import axios from "axios";
import { SUBSCRIPTIONKEY, GETSTATIONSURI, GETDEPARTURES } from "./Constants";
class TrainDepartures {
  /*
   * getStations method will retrieve all the stations data available in Netherlands
   * Adding the subscription key as the header, so as to retrieve the authorized data
   *  */

  static getStations() {
    return axios.get(GETSTATIONSURI, {
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTIONKEY,
      },
    });
  }

  /*
   * getDepartures method will retrieve all the departure data of a particular station.
   * Adding the subscription key as the header, so as to retrieve the authorized data
   *  */

  static getDepartures(stationcode = "GVC") {
    return axios.get(GETDEPARTURES.replace("{stationcode}", stationcode), {
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTIONKEY,
      },
    });
  }
}

export default TrainDepartures;
