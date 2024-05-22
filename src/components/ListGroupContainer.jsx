import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ModalContainer from "./Modal";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../app/taskSlice";
import NoTasksBanner from "./NoTasks";
import SkeletonLoader from "./SkeletonLoader";
import Badges from "../components/Badges";

function ListGroupContainer() {
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.task);
  const { tasks, loading, error } = taskState;

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchTasks("all"));
    }, 3000);
  }, []);

  return (
    <ListGroup className="scrollable-list center-box">
      <ListGroupItem href="#" tag="a" key="hhuiu" className="center">
        <h3 className="center">Task List</h3>
      </ListGroupItem>
      <ListGroupItem href="#" tag="a" key="hhuiuk">
        {tasks?.length === 0 && loading === false && <NoTasksBanner />}
        {loading === true && (
          <>
            <SkeletonLoader
              width="100%"
              height="15px"
              borderRadius="10px"
              marginBottom="10px"
            />
            <SkeletonLoader
              width="100%"
              height="15px"
              borderRadius="10px"
              marginBottom="10px"
            />
            <SkeletonLoader
              width="100%"
              height="15px"
              borderRadius="10px"
              marginBottom="10px"
            />
            <SkeletonLoader
              width="100%"
              height="15px"
              borderRadius="10px"
              marginBottom="10px"
            />
            <SkeletonLoader
              width="100%"
              height="15px"
              borderRadius="10px"
              marginBottom="10px"
            />
          </>
        )}
        {tasks?.length > 0 && <Badges tasks={tasks} />}
      </ListGroupItem>
      {tasks?.map((task) => (
        <ListGroupItem href="#" tag="a" key={task._id}>
          <div className="row-flex baseline">
            <p
              className="title-ext ellipsis"
              data-tooltip-id={"my-tooltip" + task?._id}
              data-tooltip-content={task?.title}
              data-tooltip-place="top"
            >
              {task.title}
            </p>
            <Tooltip
              id={"my-tooltip" + task?._id}
              effect="solid"
              className="custom-tooltip"
            />
            <div>
              <ModalContainer
                Icon={<GrView className="icon" />}
                title="Task Details"
                task={task}
              />
              <ModalContainer
                Icon={<BiEdit className="icon" />}
                title="Update Task"
                task={task}
              />
              <ModalContainer
                Icon={<RiDeleteBin2Fill className="icon" />}
                title="Delete Task"
                task={task}
              />
            </div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default ListGroupContainer;
