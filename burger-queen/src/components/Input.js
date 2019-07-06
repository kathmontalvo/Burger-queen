import React from 'react'

const Inputs = ({type, value, update, placeholder, icon}) => {
  return (
    <div className="input-group form-group">
        <input type={type} value={value} onChange={update} className="form-control" placeholder={placeholder} aria-label="" aria-describedby="basic-addon1" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button"><i className={icon}></i></button>
        </div>
    </div>

      )
}

export default Inputs