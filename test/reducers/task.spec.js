import task from "../../app/reducers/task";
import {
  addTask,
  removeTask,
  completeTask,
  activateTask,
  deactivateTask
} from "../../app/actions/task";

describe("task", () => {
  const mockState = [
    {
      name: "Save the world",
      currentProgress: 0,
      totalPomodoros: 1,
      stopped: 0,
      active: false
    }
  ];

  it("should be defined", () => {
    expect(task).toBeDefined();
  });

  it("should handle initial state", () => {
    expect(task(undefined, [])).toMatchSnapshot();
  });

  describe("add task", () => {
    it("should add tasks", () => {
      expect(task([], addTask("Save the world", 1))).toEqual(mockState);
    });

    it("shouldn't add tasks that are already added", () => {
      //
      expect(task(mockState, addTask("Save the world", 100)).length).toEqual(1);
    });

    it("shouldn't override tasks that are already added", () => {
      //
      expect(task(mockState, addTask("Save the world", 100))).toEqual(
        mockState
      );
    });
  });

  describe("remove task", () => {
    it("should remove tasks", () => {
      expect(task(mockState, removeTask("Save the world")).length).toBe(0);
    });
  });

  describe("complete task", () => {
    it("should temporarily remove tasks", () => {
      expect(task(mockState, completeTask("Save the world")).length).toBe(0);
    });
  });

  describe("activate task", () => {
    it("should change a task state to active", () => {
      expect(task(mockState, activateTask("Save the world"))[0].active).toBe(
        true
      );
    });

    it("should do nothing to an active task", () => {
      const activeMockState = task(mockState, activateTask("Save the world"));

      expect(task(activeMockState, activateTask("Save the world"))).toEqual(
        activeMockState
      );
    });

    it("should not change anything about non-related tasks", () => {
      const state = task(mockState, addTask("Another one", 1));

      expect(task(state, activateTask("Save the world"))[1].active).toEqual(
        false
      );
    });
  });

  describe("deactivate task", () => {
    it("should change a task state to inactive", () => {
      const activeMockState = task(mockState, activateTask("Save the world"));

      expect(
        task(activeMockState, deactivateTask("Save the world"))[0].active
      ).toBe(false);
    });

    it("should increment deactivated tasks as stopped", () => {
      const activeMockState = task(mockState, activateTask("Save the world"));

      expect(
        task(activeMockState, deactivateTask("Save the world"))[0].stopped
      ).toBe(1);
    });

    it("should do nothing to an inactive task", () => {
      expect(task(mockState, deactivateTask("Save the world"))).toEqual(
        mockState
      );
    });

    it("should not change anything about non-related tasks", () => {
      const state = task(mockState, addTask("Another one", 1));

      expect(task(state, deactivateTask("Save the world"))).toEqual(state);
    });
  });
});
