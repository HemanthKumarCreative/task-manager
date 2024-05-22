import React, { useState } from "react";
import { Form, Label, Input, FormGroup, Row, Col, Button } from "reactstrap";
import DropdownSelector from "./DropDown";
import { useDispatch } from "react-redux";
import { addTask, fetchTasks, updateTask } from "../app/taskSlice";

function FormContainer({ initialTask, mode, toggle }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState(
    mode === "edit"
      ? initialTask
      : { title: "", description: "", status: "To Do" }
  );
  const { title, description, status } = task;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(addTask(task));
    await toggle();
    await dispatch(fetchTasks("all"));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await dispatch(updateTask(task));
    await toggle();
    await dispatch(fetchTasks("all"));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <Form
      className="form"
      onSubmit={mode === "edit" ? handleUpdate : handleSubmit}
    >
      <Row className="row-cols-lg-auto g-3 align-items-center form">
        <Col className="form form-flex">
          <Label for="title">
            Title <span>*</span>
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Task title here..."
            type="text"
            required
            value={title}
            onChange={handleChange}
          />
          <Label for="description">
            Description <span>*</span>
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Task description here..."
            required
            value={description}
            onChange={handleChange}
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "10px",
              boxSizing: "border-box",
              resize: "vertical",
            }}
            type="textarea"
          />
          <Row className="align-items-center">
            <Col className="form form-flex">
              <DropdownSelector
                direction="down"
                task={task}
                setTask={setTask}
              />
            </Col>
            <Col className="form form-flex">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}

export default FormContainer;
