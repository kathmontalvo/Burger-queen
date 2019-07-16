import React, {useState} from 'react'
import Inputs from '../Input';


const Clientname = () => {
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const div = e.target.closest('div')
    const name = div.querySelector('.nameValue')
    const btn = div.querySelector('.checkBtn')
    const width = div.querySelector('.input-group')
    let staticName = div.querySelector('.pValue')
    name.className="hidden"
    btn.className="hidden"
    width.className="hidden"
    staticName.textContent = name.value
  }

  return (
    <div className="d-flex align-items-center" data-test-id="div">
        <p className="mr-3">Cliente: </p>
        <Inputs 
        divInput="input-group form-group "
        type='text'
        value={name}
        label='Nombre'
        update={updateName}
        placeholder='Nombre'
        classValue='nameValue form-control'
        visibility='hidden'/>
        <p className="pValue"></p>
        <button onClick={onSubmit} className="checkBtn ml-3 btn btn-color padding-10 mb-3 mt-0"><i className="fas fa-check"></i></button>
    </div>
    )
}

export default Clientname