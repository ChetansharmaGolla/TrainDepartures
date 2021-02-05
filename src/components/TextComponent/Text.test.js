import Text from "./Text";
import { shallow } from "enzyme";

describe("<Text />", () => {
  const sampleText = "THis is a Sample Text";
  it("should correctly render the component", () => {
    const wrapper = shallow(<Text value={sampleText} />);
    expect(wrapper.is("span")).toBeTruthy();
    expect(wrapper.find("span").length).toBe(1);
  });
});
