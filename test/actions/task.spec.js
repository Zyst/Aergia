import { spy } from "sinon";
import * as actions from "../../app/actions/task";

describe("actions", () => {
  it("Should be defined", () => {
    expect(actions).toBeDefined();
  });

  it("add task should match snapshot", () => {
    expect(actions.addTask("hi", 3)).toMatchSnapshot();
  });
});
