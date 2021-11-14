import React from "react";
import { Button, Card, Collapse } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { Api } from "./Api";

// user input - includes validation
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [cardOpen, setCardOpen] = React.useState(false);
  const toggleOpen = () => setCardOpen(!cardOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    Api.createItem(value).then((persistedItem) => {
      addTodo(value, description);
      console.log(JSON.stringify(value));
      setValue("");
      setDescription("");
    });
    /* addTodo(value, description);
    console.log(JSON.stringify(value));
    setValue("");
    setDescription(""); */
  };

  return (
    <div>
      <Button
        className="form-toggle"
        onClick={toggleOpen}
        aria-controls="todo-form"
        aria-expanded={cardOpen}
      >
        <h3>{cardOpen ? "Close To Do form" : "Start a new To Do entry"}</h3>
      </Button>
      <Collapse in={cardOpen}>
        <Card id="todo-form">
          <form onSubmit={handleSubmit}>
            <Card.Header>
              <div>
                <FaPencilAlt className="form-label-icon" />
                <label htmlFor="new-todo">Add Todo...</label>
              </div>
              <input
                id="new-todo"
                type="text"
                className="input"
                value={value}
                placeholder="..."
                onChange={(e) => setValue(e.target.value)}
              />
            </Card.Header>
            <label htmlFor="new-todo-description">
              Optional: Add a description
            </label>
            <input
              id="new-todo-description"
              type="text"
              className="input"
              value={description}
              placeholder="..."
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <br />
            <Button type="submit" variant="success" size="lg">
              Save Todo Item
            </Button>
          </form>
        </Card>
      </Collapse>
    </div>
  );
}

export default TodoForm;
