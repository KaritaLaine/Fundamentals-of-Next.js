import { render, screen } from "@testing-library/react";
import Greeting from "../app/components/greeting/greeting";

test("renders the greeting component with a name passed as a prop", () => {
	render(<Greeting name="Karita" />);

	expect(screen.getByText("Hi there, Karita! :)")).toBeInTheDocument();
});
