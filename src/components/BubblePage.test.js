import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import { getColors as mockGetColors } from "../api/getColors";

jest.mock("../api/getColors");

const bubbleData = [
  { color: "aliceblue", code: { hex: "#f0f8ff" }, id: 1 },
  { color: "limegreen", code: { hex: "#99ddbc" }, id: 2 },
];

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockGetColors.mockResolvedValue(bubbleData);
  render(<BubblePage />);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
