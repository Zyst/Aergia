import React from "react";
import { spy } from "sinon";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Timer, { zeroPadding, displayTime } from "../../app/components/Timer";

const setup = () => {
  const actions = {
    pomodoroDone: spy()
  };

  const component = shallow(
    <Timer active minutes={25} break={5} {...actions} />
  );

  return {
    component,
    timer: component.find(".timer"),
    actions
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
    const tree = renderer
      .create(<Timer active minutes={15} break={3} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should call a timeout in handleTimer active path", () => {
    jest.useFakeTimers();
    /* eslint-disable no-unused-vars */
    const { component } = setup();

    expect(setTimeout.call.length).toBe(1);
  });

  it("Should reset time if we are not active", () => {
    const component = shallow(<Timer minutes={25} break={5} />);
    component.state().time = 1;
    component.instance().handleTimer();

    expect(component.state().time).toBe(25 * 60);
  });

  it("Should reset break if we are not active", () => {
    const component = shallow(<Timer minutes={25} break={5} />);
    component.state().break = true;
    component.instance().handleTimer();

    expect(component.state().break).toBe(false);
  });

  it("Should handle time ticking", () => {
    const { component } = setup();

    component.instance().reduceTime();
    // If we reduce we should be 25 minutes - 1 second
    expect(component.state().time).toBe(25 * 60 - 1);
  });

  it("Should start break if we go below 1 on normal", () => {
    const { component } = setup();

    component.state().time = 1;

    component.instance().reduceTime();
    expect(component.state().time).toBe(5 * 60);
  });

  it("Should start normal timer if we go below 1 on break", () => {
    const { component } = setup();

    component.state().time = 1;
    component.state().break = true;

    component.instance().reduceTime();
    expect(component.state().time).toBe(25 * 60);
  });

  it("Should send pomodoro done if we go below 1 on normal", () => {
    const { component, actions } = setup();

    component.state().time = 1;

    component.instance().reduceTime();
    expect(actions.pomodoroDone.called).toBe(true);
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

    it("Should return hours properly", () => {
      expect(displayTime(3666)).toBe("1:01:06");
      expect(displayTime(36000)).toBe("10:00:00");
    });
  });
});
