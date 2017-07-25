import { spy } from "sinon";
import React from "react";
import { render } from "enzyme";
import renderer from "react-test-renderer";
import { configureStore } from "../../app/store/configureStore.prod";
import AddInput from "../../app/components/AddInput";

function setup() {
  const actions = {
    cancel: spy()
  };
  const store = configureStore();

  const component = render(<AddInput store={store} {...actions} />);

  return {
    component,
    actions,
    store,
    form: component.find("form"),
    input: component.find("input")
  };
}

describe("Add Input component", () => {
  it("should be defined", () => {
    expect(AddInput).toBeDefined();
  });

  it("should match snapshot", () => {
    const { actions, store } = setup();

    const tree = renderer
      .create(<AddInput store={store} {...actions} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render a form", () => {
    const { form } = setup();

    expect(form).toHaveLength(1);
  });

  it("should render an input", () => {
    const { input } = setup();

    expect(input).toHaveLength(1);
  });
});
