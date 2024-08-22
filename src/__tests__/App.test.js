import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".app")).toBeInTheDocument();
  expect(container.querySelector(".app > header")).toBeInTheDocument();
  expect(container.querySelector(".app > aside")).toBeInTheDocument();
  expect(container.querySelector(".app > main")).toBeInTheDocument();
});