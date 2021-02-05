import ErrorComponent from "./ErrorComponent";
import { shallow } from "enzyme";

describe("<ErrorComponent />", () => {
  const sampleErrorText = "THis is a sample Error Text";
  it("should correctly render the component", () => {
    const wrapper = shallow(<ErrorComponent errorMessage={sampleErrorText} />);
    expect(wrapper.is("div")).toBeTruthy();
    expect(wrapper.find("div").length).toBe(1);
  });
});
