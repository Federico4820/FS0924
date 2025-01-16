import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing books number", () => {
  it("renders all the 150 books", () => {
    render(<App />);
    const allTheBookCards = screen.getAllByTestId("book-card");
    expect(allTheBookCards).toHaveLength(150);
  });
  it("renders CommentArea component", () => {
    render(<App />);
    const reviewInputField = screen.getByPlaceholderText(
      /inserisci qui il testo/i
    );
    expect(reviewInputField).toBeInTheDocument();
  });
});
