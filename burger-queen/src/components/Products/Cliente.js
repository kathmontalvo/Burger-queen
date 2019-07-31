import React, {useState} from 'react'


const Clientname = ({name, updateName}) => {
const [show, setShow] = useState(true)
  const onSubmit = (e) => {
    e.preventDefault()
    setShow(false)
  }

  return (
    <form className="d-flex align-items-center form-val my-4" data-test-id="div">
        <label className="my-0 mr-2">Cliente: </label>
        {show === true && (
          <>
          <input 
          type='text'
          value={name}
          onChange={updateName}
          placeholder='Nombre'
          className='name-value form-control'/>
          <div onClick={onSubmit} data-testid='submitName' className="checkBtn ml-3 btn btn-color padding-10 mt-0"><i className="fas fa-check"></i></div>
          </>
        )
        }
        {show === false && (
          <p className="pValue my-0">{name}</p>
        )}
        
    </form>
    )
};

export default Clientname;