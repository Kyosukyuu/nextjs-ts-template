import React from "react";
import { mount } from "enzyme";
import Button from "../components/Button";
import "../setupTests";

describe("Button", () => {
  const mountWrapper = mount(<Button />);

  it("should mount without throwing an error", () => {
    expect(mountWrapper.type()).toEqual(Button);
  });

  it("should have a type of 'button'", () => {
    expect(mountWrapper.find("button").props().type).toEqual(
      "button"
    );
  });

  it("should have one button", () => {
    expect(mountWrapper.find("button")).toHaveLength(1);
  });
});
