import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Timer from "../../app/components/Timer";

describe("Timer component", () => {
  it("should be defined", () => {
    expect(Timer).toBeDefined();
  });
});
