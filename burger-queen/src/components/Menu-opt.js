import React from 'react'

const MenuOpts = ({ name, classOpt, click }) => {
  return (
    <>
      <button onClick={click} className={classOpt}>{name}</button>
    </>
  )
}

export default MenuOpts