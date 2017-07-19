import { spy } from "sinon";
import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
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
  it("should be defined", () => {
    expect(Timer).toBeDefined();
  });

  it("");

  describe("Zero padding", () => {
    it("should be defined", () => {
      expect(zeroPadding).toBeDefined();
    });

    it("should pad zeroes", () => {
      expect(zeroPadding(0)).toBe("00");
      expect(zeroPadding(9)).toBe("09");
    });

    it("should ignore numbers that don't need to be padded", () => {
      expect(zeroPadding(10)).toBe("10");
      expect(zeroPadding(1992)).toBe("1992");
    });
  });

  describe("Display time", () => {
    it("should be defined", () => {
      expect(displayTime).toBeDefined();
    });

    it("should return seconds as seconds with 00 minutes", () => {
      expect(displayTime(0)).toBe("00:00");
      expect(displayTime(59)).toBe("00:59");
    });

    it("should return minutes properly", () => {
      expect(displayTime(3540)).toBe("59:00");
      expect(displayTime(3599)).toBe("59:59");
    });

    it("should return hours properly (No Zero pad)", () => {
      expect(displayTime(3666)).toBe("1:01:06");
      expect(displayTime(36000)).toBe("10:00:00");
    });
  });
});
