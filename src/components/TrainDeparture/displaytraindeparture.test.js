import DisplayTrainDepartures from "./DisplayTrainDepartures";
import { shallow } from "enzyme";
import { testobj, failureScenario } from "./testdata";

describe("<TrainDeparturesData />", () => {
  const {
    payload: { departures },
  } = testobj;
  const {
    payload: { departures: failureDep },
  } = failureScenario;
  it("should correctly Render the component", () => {
    const wrapper = shallow(<DisplayTrainDepartures departures={departures} />);
    console.log(wrapper);
    expect(wrapper.is("div")).toBeTruthy();
    expect(wrapper.find("div").length).toBe(58);
  });
  it("should return handle errors  while rendering the component", () => {
    const wrapper = shallow(<DisplayTrainDepartures departures={failureDep} />);
    console.log(wrapper);
    expect(wrapper.is("div")).toBeTruthy();
    expect(wrapper.find("div").length).toBe(58);
  });
});
