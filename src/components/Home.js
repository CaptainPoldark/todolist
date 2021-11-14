import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { FaGamepad } from "react-icons/fa";

function Home() {
  const [todos, setTodos] = React.useState([
    {
      title: "Outwork",
      description:
        "Ferrari doesn’t advertise on TV because their customers don’t watch much of it.",
      isCompleted: false,
    },
    {
      title: "Out-Improve",
      description:
        "You're going to use experiences to become either bitter or better. To get better you must reflect on your mistakes.",
      isCompleted: false,
    },
    {
      title: "Out-Strategize",
      description:
        "If you always make the right decision, the safe decision, the one most people make, you will be the same as everyone else.",
      isCompleted: false,
    },
    {
      title: "Outlast",
      description: "Reset, Refocus, Readjust. As many times as you need to.",
      isCompleted: false,
    },
  ]);

  const addTodo = (todoTitle, todoDescription) => {
    let title = todoTitle;
    let description = todoDescription;
    const newTodos = [...todos, { title, description, isCompleted: false }];
    setTodos(newTodos);
  };
  const removeTodo = (selectedIndex) => {
    var index = Number(selectedIndex);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="list-group">
        <Container fluid="md">
          <Row>
            <Col xs="auto">
              <TodoForm className="todo-form" addTodo={addTodo} />
            </Col>

            <div className="todo-list-container">
              {todos.length < 1 ? (
                <Col lg="auto" className="empty-list-alert">
                  <Alert key={0} variant="success"><h3>
                    Looks like you have nothing to do today!!!</h3><br/><FaGamepad className="game-pad-icon"/>
                  </Alert>
                </Col>
              ) : (
                <Col xs="auto">
                  {todos.map((todo, i) => (
                    <Todo index={i} key={i} todo={todo} remove={removeTodo} />
                  ))}
                </Col>
              )}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
