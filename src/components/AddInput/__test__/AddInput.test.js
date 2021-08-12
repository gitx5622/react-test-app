import {render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodos = jest.fn();
describe("AddInput", () => {
    it("should render input element", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodos}
            />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument();
    })
    it("should be able to type in input", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodos}
            />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go buy Playstation"}})
        expect(inputElement.value).toBe("Go buy Playstation");
    })
    it("should have empty input when add button is clicked", async () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodos}
            />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i})
        fireEvent.change(inputElement, { target: { value: "Go buy Playstation"}})
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    })
})