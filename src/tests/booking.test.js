import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText(
    "Fill the form below to book a table"
  );
  expect(headingElement).toBeInTheDocument();
});
