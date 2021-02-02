import Spinner from "./Spinner";
import { shallow } from "enzyme";

describe("<Spinner />", () => {
  it("should correctly render the component", () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.is("div")).toBeTruthy();
    expect(wrapper.find("div").length).toBe(1);
  });
});
