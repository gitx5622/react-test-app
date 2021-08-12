import { render, screen } from "@testing-library/react";
import Header from "../Header";


// Unit test for Component Header
describe("Header", () => {
    it("Heading",async () => {
        render(<Header title="My header"/>);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    })
    // GET BY TITLE
    it("Heading",async () => {
        render(<Header title="My header"/>);
        const headingElement = screen.getByTitle("Header")
        expect(headingElement).toBeInTheDocument();
    })

// FIND BY
    it("Heading",async () => {
        render(<Header title="My header"/>);
        const headingElement = await  screen.findByText(/my header/i)
        expect(headingElement).toBeInTheDocument();
    })

// QUERY BY
    it("Heading",async () => {
        render(<Header title="My header"/>);
        const headingElement =  screen.queryByText(/dog/i)
        expect(headingElement).not.toBeInTheDocument();
    })

// GET ALL BY ROLE
// QUERY BY
    it("Heading",async () => {
        render(<Header title="My header"/>);
        const headingElements =  screen.getAllByRole("heading")
        expect(headingElements.length).toBe(2);
    })
})


