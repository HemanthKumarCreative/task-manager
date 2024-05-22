import React from "react";
import { Badge } from "reactstrap";

function TaskDetails({ task }) {
  return (
    <div>
      <h6>
        {task?.title}{" "}
        <Badge
          color={
            task?.status === "To Do"
              ? "danger"
              : task?.status === "Doing"
              ? "warning"
              : "success"
          }
        >
          {task?.status}
        </Badge>
      </h6>
      <p>{task?.description}</p>
    </div>
  );
}

export default TaskDetails;
