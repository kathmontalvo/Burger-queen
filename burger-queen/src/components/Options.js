import React from 'react';

const MenuOptions = ({click, option, aClass}) => {
  return (
    <li className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" >{option}</a>
    </li>
  )
};

export default MenuOptions;