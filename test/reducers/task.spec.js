import task from "../../app/reducers/task";
import {} from "../../app/actions/task";

describe("task", () => {
  const mockState = {
    task: [
      {
        name: "Save the world",
        currentProgress: 0,
        totalPomodoros: 1,
        stopped: 0,
        active: false
      }
    ]
  };
  it("should be defined", () => {
    expect(task).toBeDefined();
  });

  it("should handle initial state", () => {
    expect(task(undefined, [])).toMatchSnapshot();
  });
});
