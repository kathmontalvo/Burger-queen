import React from 'react';

const MenuOptions = ({click, menu, aClass}) => {
  return (
    <li className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" aria-controls={menu}>{menu}</a>
    </li>
  )
};

export default MenuOptions;