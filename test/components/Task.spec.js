import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Task from "../../app/components/Task";

describe("Task component", () => {
  it("should be defined", () => {
    expect(Task).toBeDefined();
  });
});
