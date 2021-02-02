import TrainDeparturesAPI from "./TrainDepartures";
import { shallow } from "enzyme";

describe("<TrainDeparturesAPI />", () => {
  it("should retrieve the stations data", () => {
    const payload = TrainDeparturesAPI.getStations();
    expect(payload).toBeTruthy();
  });
  it("should retrieve the station's departure data", () => {
    const payload = TrainDeparturesAPI.getDepartures();
    expect(payload).toBeTruthy();
  });
});
