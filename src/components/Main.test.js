import React from "react";
import * as renderer from "react-test-renderer";
import Main from "./Main";

test("Run Test", () => {
  const component = renderer.create(<Main />);
  expect(component).toBeDefined();
});
