import {fireEvent, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Todo from "../Todo";

const MockedTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i})
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task}})
        fireEvent.click(buttonElement);
    })
}
// Integration tests
describe("Todo component and all the other components associated", () => {
    it("should render one item", async () => {
        render(<MockedTodo/>);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    })
    it("should render multiple items", async () => {
        render(<MockedTodo/>);
        addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3)
    })
    it("task should not have completed class when initially rendered", async () => {
        render(<MockedTodo/>);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active")
    })
    it("task should have completed class when clicked", async () => {
        render(<MockedTodo/>);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})