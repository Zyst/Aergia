import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import * as configure from "../../app/store/configureStore.prod";
import AddInput from "../../app/components/AddInput";

function setup() {
  const actions = {
    cancel: spy()
  };
  const store = configure.configureStore();

  const component = shallow(
    <Provider store={store}>
      <AddInput cancel={actions.cancel} />
    </Provider>
  );

  return {
    component,
    actions,
    store
  };
}

describe("Add Input component", () => {
  it("should be defined", () => {
    expect(AddInput).toBeDefined();
  });

  it("should match snapshot", () => {
    const { actions, store } = setup();

    const tree = renderer
      .create(
        <Provider store={store}>
          <AddInput cancel={actions.cancel} />
        </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
