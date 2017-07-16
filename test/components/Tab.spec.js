import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Tab from "../../app/components/Tab";

describe("Tab component", () => {
  it("should be defined", () => {
    expect(Tab).toBeDefined();
  });
});
