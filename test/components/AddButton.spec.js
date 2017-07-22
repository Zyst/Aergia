import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { spy } from "sinon";
import AddButton from "../../app/components/AddButton";

describe("Add Button component", () => {
  it("should be defined", () => {
    expect(AddButton).toBeDefined();
  });

  it("Should match snapshot", () => {
    const tree = renderer.create(<AddButton add={jest.fn()} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render a button", () => {
    const button = shallow(<AddButton add={jest.fn()} />).find("button");

    expect(button).toBeDefined();
  });

  it("Should call add when clicked", () => {
    const toggleAdd = spy();

    const component = shallow(<AddButton add={toggleAdd} />);
    component.find("button").simulate("click");

    expect(toggleAdd.called).toBe(true);
  });
});
