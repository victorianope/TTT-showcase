import React from "react";
import { render } from "~/components/base/test-utils";

import { screen } from "@testing-library/react";

import { App } from "../app";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
