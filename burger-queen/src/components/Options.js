import React from 'react';

const MenuOptions = ({click, options, aClass}) => {
  return (
    <li className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" >{options}</a>
    </li>
  )
};

export default MenuOptions;