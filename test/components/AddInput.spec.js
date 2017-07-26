import { spy } from "sinon";
import React from "react";
import { render, mount } from "enzyme";
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

  it("should add pomodoros", () => {
    const { store, actions } = setup();
    const component = mount(
      <AddInput.WrappedComponent store={store} {...actions} />
    );

    component.instance().addPomodoro();

    expect(component.state().pomodoros).toBe(1);
  });

  it("should remove pomodoros", () => {
    const { store, actions } = setup();
    const component = mount(
      <AddInput.WrappedComponent store={store} {...actions} />
    );

    component.instance().addPomodoro();
    expect(component.state().pomodoros).toBe(1);

    component.instance().removePomodoro();
    expect(component.state().pomodoros).toBe(0);
  });

  it("should not remove pomodoros below 0", () => {
    const { store, actions } = setup();
    const component = mount(
      <AddInput.WrappedComponent store={store} {...actions} />
    );

    component.instance().removePomodoro();

    expect(component.state().pomodoros).toBe(0);
  });

  it("should render a form", () => {
    const { form } = setup();

    expect(form).toHaveLength(1);
  });

  it("should render an input", () => {
    const { input } = setup();

    expect(input).toHaveLength(1);
  });

  describe("form tests", () => {
    it("should not submit the form with no input", () => {
      const { store, actions } = setup();
      const component = mount(<AddInput store={store} {...actions} />);
      const form = component.find("form").first();

      form.simulate("submit");
      expect(actions.cancel.called).toBe(false);
    });

    it("should submit when we pass input", () => {
      const { store, actions } = setup();
      const component = mount(<AddInput store={store} {...actions} />);
      const form = component.find("form").first();
      const input = component.find("input").first();
      input.node.value = "Test";

      form.simulate("submit");
      expect(actions.cancel.called).toBe(true);
    });
  });
});
