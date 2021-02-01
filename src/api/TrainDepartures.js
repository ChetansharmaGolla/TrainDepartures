import axios from "axios";
import { SUBSCRIPTIONKEY, GETSTATIONSURI, GETDEPARTURES } from "./Constants";
class TrainDepartures {
  // this method will retrieve all the stations data available in Netherlands

  static getStations() {
    return axios.get(GETSTATIONSURI, {
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTIONKEY,
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
  static getDepartures(stationcode = "GVC") {
    return axios.get(GETDEPARTURES.replace("{stationcode}", stationcode), {
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTIONKEY,
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}

export default TrainDepartures;
/**
 * Get stations

Can be used to get list of station codes for stations.

URL: https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations

Authenticationheader

· Key Ocp-Apim-Subscription-Key, value 9501613007cd41398976a63b0a5bd925

Usage details

· search for ‘namen.lang’ in response body. It should have value 'Den Haag Centraal'

· then get attribute 'code' for that station (which is 'GVC' in this case)

Get departures

Can be used to get all train departures from a given station.

URL: https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures

Authentication header

· Key Ocp-Apim-Subscription-Key, value 9501613007cd41398976a63b0a5bd925

Usage details

· use output of getAllStations as parameter for this one.

· e.g. https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?station=GVC

Output

Show all departures found using getDepartures in a view showing:

1. planned departure time 'plannedDateTime' from response departure API

2. direction 'direction' from response departure API

3. platform 'plannedTrack' from response departure API

4. train type 'trainCategory' from response departure API

show ‘Sprinter’ for train category

‘SPR’ and ‘Intercity’ for category ‘IC
 * 
 * 
 * 
 */
