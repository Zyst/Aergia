import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AddButton from "../../app/components/AddButton";

describe("Add Button component", () => {
  it("should be defined", () => {
    expect(AddButton).toBeDefined();
  });
});
