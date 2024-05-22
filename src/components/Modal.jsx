import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormContainer from "./Form";
import TaskDetails from "./TaskDetails";
import { useDispatch } from "react-redux";
import { deleteTask, fetchTasks } from "../app/taskSlice";

function ModalContainer({ Icon, title, task }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();

  const handleDelete = async (event) => {
    await dispatch(deleteTask(event.target.id));
    await toggle();
    await dispatch(fetchTasks("all"));
  };

  return (
    <>
      <Button
        color="transparent"
        onClick={toggle}
        className="padd no-focus-outline"
      >
        <span>{Icon}</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          {title === "Delete Task" && (
            <>Are you sure ? You want to delete the Task</>
          )}
          {title === "Update Task" && (
            <FormContainer initialTask={task} mode="edit" toggle={toggle} />
          )}
          {title === "Add Task" && (
            <FormContainer initialTask={task} mode="add" toggle={toggle} />
          )}
          {title === "Task Details" && <TaskDetails task={task} />}
        </ModalBody>
        {title === "Delete Task" && (
          <ModalFooter>
            <Button id={task._id} color="primary" onClick={handleDelete}>
              Confirm
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        )}
      </Modal>
    </>
  );
}

export default ModalContainer;
