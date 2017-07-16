import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AddInput from "../../app/components/AddInput";

describe("Add Input component", () => {
  it("should be defined", () => {
    expect(AddInput).toBeDefined();
  });
});
