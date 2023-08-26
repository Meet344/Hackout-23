import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const MyDropdown = (props) => {

    const [dropdown, setDropdown] = useState("Select an UserType")

    const handleClick = (e)=>{
        let userType = e.target.getAttribute('value');
        setDropdown(userType);
        props.userData(userType);
    }

 
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {dropdown}
      </Dropdown.Toggle>
      
      <Dropdown.Menu>
        <Dropdown.Item value="patient" onClick={handleClick}>Patient</Dropdown.Item>
        <Dropdown.Item value="admin"onClick={handleClick}>Admin</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;
