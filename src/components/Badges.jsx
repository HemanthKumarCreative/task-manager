import React from "react";
import { Badge, Button } from "reactstrap";
import { fetchTasks, setLoading, resetTasks } from "../app/taskSlice";
import { useDispatch } from "react-redux";

const TaskBadges = ({ tasks }) => {
  const dispatch = useDispatch();
  const handleFilter = async (type) => {
    await dispatch(resetTasks());
    await dispatch(setLoading(true));
    await dispatch(fetchTasks(type));
    await dispatch(setLoading(false));
  };

  return (
    <div>
      <h5>
        <Button
          size="sm"
          color="primary"
          className="btn-margin"
          onClick={() => handleFilter("all")}
        >
          <Badge color="primary" pill>
            All
          </Badge>
        </Button>
        <Button
          size="sm"
          color="danger"
          className="btn-margin"
          onClick={() => handleFilter("To Do")}
        >
          <Badge color="danger" pill>
            To Do
          </Badge>
        </Button>
        <Button
          size="sm"
          color="warning"
          className="btn-margin"
          onClick={() => handleFilter("Doing")}
        >
          <Badge color="warning" pill>
            Doing
          </Badge>
        </Button>
        <Button
          size="sm"
          color="success"
          className="btn-margin"
          onClick={() => handleFilter("Done")}
        >
          <Badge color="success" pill>
            Done
          </Badge>
        </Button>
      </h5>
    </div>
  );
};

export default TaskBadges;
