/* eslint-env jest */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Write tests")).toBeInTheDocument();
    });

    test("adds a new todo", async () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a todo");
        const addButton = screen.getByText("Add");

        await userEvent.type(input, "New Todo");
        fireEvent.click(addButton);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles a todo completion", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");

        expect(todo).not.toHaveStyle("text-decoration: line-through");

        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: line-through");

        fireEvent.click(todo);
        expect(todo).not.toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId(/delete-1/i);

        fireEvent.click(deleteButton);
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
