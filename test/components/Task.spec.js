import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Task from "../../app/components/Task";

function setup() {
  const actions = {
    completeTask: spy(),
    removeTask: spy(),
    activateTask: spy(),
    deactivateTask: spy()
  };

  const activeMockTask = {
    name: "Active mock",
    currentProgress: 1,
    totalPomodoros: 3,
    stopped: 1,
    active: true
  };

  const inactiveMockTask = {
    name: "mock",
    currentProgress: 0,
    totalPomodoros: 1,
    stopped: 1,
    active: false
  };

  const activeComponent = shallow(<Task task={activeMockTask} {...actions} />);
  const inactiveComponent = shallow(
    <Task task={inactiveMockTask} {...actions} />
  );

  return {
    actions,
    activeMockTask,
    inactiveMockTask,
    activeComponent,
    inactiveComponent
  };
}

describe("Task component", () => {
  it("should be defined", () => {
    expect(Task).toBeDefined();
  });

  it("should match snapshot", () => {
    const { inactiveMockTask, activeMockTask, actions } = setup();

    const inactiveTree = renderer
      .create(<Task task={inactiveMockTask} {...actions} />)
      .toJSON();

    expect(inactiveTree).toMatchSnapshot("inactive");

    const activeTree = renderer
      .create(<Task task={activeMockTask} {...actions} />)
      .toJSON();

    expect(activeTree).toMatchSnapshot("active");

    const noStopTree = renderer.create(
      <Task
        task={{
          ...activeMockTask,
          stopped: 0
        }}
        {...actions}
      />
    );

    expect(noStopTree).toMatchSnapshot("can't stop won't stop");
  });

  it("should call complete task when clicked", () => {
    const { activeComponent, actions } = setup();
    const checkmark = activeComponent.find(".fa.fa-check.success").first();

    checkmark.simulate("click");
    expect(actions.completeTask.called).toBe(true);
  });

  it("should call deactivate task when clicked", () => {
    const { activeComponent, actions } = setup();
    const stop = activeComponent.find(".fa.fa-stop.danger").first();

    stop.simulate("click");
    expect(actions.deactivateTask.called).toBe(true);
  });

  it("should call remove task when clicked", () => {
    const { inactiveComponent, actions } = setup();
    const remove = inactiveComponent.find(".fa.fa-times.danger").first();

    remove.simulate("click");
    expect(actions.removeTask.called).toBe(true);
  });

  it("should call activate task when clicked", () => {
    const { inactiveComponent, actions } = setup();
    const activate = inactiveComponent
      .find(".fa.fa-chevron-up.success")
      .first();

    activate.simulate("click");
    expect(actions.activateTask.called).toBe(true);
  });
});
