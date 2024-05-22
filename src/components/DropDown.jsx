import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function DropdownSelector({ direction, task, setTask }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState(task.status);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleStatusChange = (event) => {
    setStatus(event.target.textContent);
    setTask({ ...task, status: event.target.textContent });
  };
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
      <DropdownToggle caret className="min-width">
        {status}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleStatusChange}>To Do</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleStatusChange}>Doing</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={handleStatusChange}>Done</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

DropdownSelector.propTypes = {
  direction: PropTypes.string,
};

export default DropdownSelector;
