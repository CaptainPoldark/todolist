import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { Api } from "./components/Api";

const mockCreateItem = (Api.mockCreateItem = jest.fn());

test("add items to list"),
  () => {
    const todoText = "Learn Korean";
    mockCreateItem.mockResolvedValuedOnce(todoText);
    const { getByText, getByLabelText } = render(<App />);

    // enter content, interact with page
    const input = getByLabelText("Add Todo...");
    fireEvent.change(input, { target: { value: "wash car" } });
    fireEvent.click(getByText("Save Todo Item"));

    await wait(() => getByText('wash car'));
  };

test("ToDo", () => {
  const { getByText } = render(<App />);

  // after rendering our component

  await wait(() => getByText("To Do List"));
  await wait(() => getByText("Save Todo Item"));
});

test("add items to list", () => {
  const { getByLabelText, getByText } = render(<App />);

  // after rendering our component

  const inputTitle = getByLabelText("Add Todo...");
  fireEvent.change(inputTitle, { target: { value: "wash car" } });
  const inputDescription = getByLabelText("Optional: Add a description");
  fireEvent.change(inputDescription, {
    target: { value: "make sure to wax it!" },
  });
  fireEvent.click(getByText("Save Todo Item"));
  //confirm data
  await wait(() => getByText("wash car"));
  await wait(() => getByText("make sure to wax it!"));
});

// userEvent expresses intent better
test("user-events allows users to add...", () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTitle = getByLabelText("Add Todo...");
  const inputDescription = getByLabelText("Optional: Add a description");
  const button = getByText("Save Todo Item");

  userEvent.type(inputTitle, "Learn Korean");
  userEvent.type(inputDescription, "Get super-duper fluent");
  userEvent.click(button);

  await wait(() => getByText("Learn Korean"));
  await wait(() => getByText("Get super-duper fluent"));
});
