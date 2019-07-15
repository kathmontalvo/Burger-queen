import React from 'react'

const Inputs = ({type, value, label, update, placeholder, icon, classValue}) => {
  return (
    <div className="input-group form-group ">
        <input type={type} value={value} onChange={update} className={classValue}  aria-label={label} placeholder={placeholder} required />
        <div className="input-group-append">
          <div className="btn btn-outline-secondary icon-color" disabled><i className={icon}></i></div>
        </div>
    </div>
      )
}

export default Inputs