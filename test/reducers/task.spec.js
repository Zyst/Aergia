import task from "../../app/reducers/task";
import {} from "../../app/actions/task";

describe("reducers", () => {
  describe("task", () => {
    it("should be defined", () => {
      expect(task).toBeDefined();
    });

    it("should handle initial state", () => {
      expect(task(undefined, [])).toMatchSnapshot();
    });
  });
});
