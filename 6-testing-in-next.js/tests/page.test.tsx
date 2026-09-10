import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("header exists in home page", () => {
	render(<Home />);

	expect(screen.getByText(/welcome, again!/i)).toBeInTheDocument();
});
