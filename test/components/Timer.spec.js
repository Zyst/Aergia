// import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
// import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import Timer, { zeroPadding, displayTime } from "../../app/components/Timer";

const setup = () => {
  const component = shallow(<Timer active minutes={25} />);

  return {
    component,
    timer: component.find(".timer")
  };
};

describe("Timer component", () => {
  it("Should be defined", () => {
    expect(Timer).toBeDefined();
  });

  it("Should display a timer", () => {
    const { timer } = setup();
    expect(timer.text()).toBe("25:00");
  });

  it("Should match snapshot", () => {
    const tree = renderer.create(<Timer active minutes={15} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("Zero padding", () => {
    it("Should be defined", () => {
      expect(zeroPadding).toBeDefined();
    });

    it("Should pad zeroes", () => {
      expect(zeroPadding(0)).toBe("00");
      expect(zeroPadding(9)).toBe("09");
    });

    it("Should ignore numbers that don't need to be padded", () => {
      expect(zeroPadding(10)).toBe("10");
      expect(zeroPadding(1992)).toBe("1992");
    });
  });

  describe("Display time", () => {
    it("Should be defined", () => {
      expect(displayTime).toBeDefined();
    });

    it("Should return seconds as seconds with 00 minutes", () => {
      expect(displayTime(0)).toBe("00:00");
      expect(displayTime(59)).toBe("00:59");
    });

    it("Should return minutes properly", () => {
      expect(displayTime(3540)).toBe("59:00");
      expect(displayTime(3599)).toBe("59:59");
    });

    it("Should return hours properly (No Zero pad)", () => {
      expect(displayTime(3666)).toBe("1:01:06");
      expect(displayTime(36000)).toBe("10:00:00");
    });
  });
});
