import React from 'react';
import './Dropdown'

function DropdownItem(props){
    return (
      <li className="dropdownItem">
        <img src={props.img} alt="" />
        <a href="">{props.text}</a>
      </li>
    )
  }
  export default DropdownItem