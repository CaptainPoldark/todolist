import React from "react";
import { Accordion, Modal, Button, Container, Col, Row } from "react-bootstrap";
import { FaTrashAlt, FaBiohazard, FaCheckCircle } from "react-icons/fa";

function Todo({ todo, keyNumber, index, remove }) {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const toggleShowConfirm = () => setShowConfirm(!showConfirm);
  const [taskComplete, setTaskComplete] = React.useState(false);
  const toggleCompleted = () => setTaskComplete(!taskComplete);

  function handleTaskComplete() {
    toggleCompleted();
  }

  function handle() {
    toggleShowConfirm();
    remove(index);
  }
  return (
    <div>
      <Accordion className="todo-list" defaultActivekey="0" flush>
        <Accordion.Item eventKey={keyNumber}>
          <Accordion.Header>
            <FaCheckCircle
              className={taskComplete ? "todo-complete" : "todo-header-confirm"}
              onClick={handleTaskComplete}
            />
            <h4> {todo.title}</h4>
            <FaTrashAlt
              className="todo-header-delete"
              onClick={toggleShowConfirm}
            />
          </Accordion.Header>

          <Accordion.Body>{todo.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Modal show={showConfirm} onClose={toggleShowConfirm}>
        <Modal.Header>
          <FaBiohazard className="bio-hazard"/>
          <Modal.Title>
            <strong className="me-auto">Just making sure</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Whoa! Are you sure you want to delete this To Do item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleShowConfirm}>
            Nevermind
          </Button>

          <Button variant="danger" onClick={handle}>
            DESTROY IT!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Todo;
