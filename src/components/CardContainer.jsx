import React from "react";
import { Card } from "reactstrap";
import ModalContainer from "./Modal";
import ListGroupContainer from "./ListGroupContainer";
import { CiCirclePlus } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import TodoLogo from "../assets/images/todoLogo.png";

function CardContainer() {
  return (
    <Card className="card">
      <div className="row-flex">
        <img src={TodoLogo} className="img" />
        <div>
          <ModalContainer
            Icon={<CiCirclePlus className="icon" />}
            title="Add Task"
          />
          <ModalContainer
            Icon={<FaCircleUser className="icon" />}
            title="User Profile"
          />
        </div>
      </div>
      <ListGroupContainer />
    </Card>
  );
}

export default CardContainer;
