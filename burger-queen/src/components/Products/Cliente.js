import React from 'react'


const Clientname = ({ name, updateName, show, setShow }) => {
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(show === true ? false : true)
  }

  return (
    <form onSubmit={onSubmit} className="d-flex align-items-center form-val my-4" data-test-id="div">
      <label className="my-0 mr-2">Cliente: </label>
      {show === true && (
        <>
          <input
            type='text'
            value={name}
            onChange={updateName}
            placeholder='Nombre'
            className='name-value form-control' />
          <button data-testid='submit' className="checkBtn ml-3 btn btn-color padding-10 mt-0"><i className="fas fa-check"></i></button>
        </>
      )
      }
      {show === false && (
        <>
          <p data-testid="change-name" className="pValue my-0">{name}</p>
          <button data-testid="edit" className="checkBtn ml-3 btn btn-color padding-10 mt-0">Edit</button>
        </>
      )}

    </form>
  )
};

export default Clientname;