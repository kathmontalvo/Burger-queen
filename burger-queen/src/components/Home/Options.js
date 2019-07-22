import React from 'react';

const MenuOptions = ({click, menu, aClass}) => {
  return (
    <ul className="nav">
    <li className="nav-item" onClick={click}>
      <a className={aClass} data-toggle="tab" href="#" role="tab" aria-controls={menu}>{menu}</a>
    </li>
    </ul>

  )
};

export default MenuOptions;