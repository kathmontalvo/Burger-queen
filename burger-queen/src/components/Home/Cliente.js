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
    <form className="d-flex align-items-center my-4" data-test-id="div">
        <p className="my-0 mr-2">Cliente: </p>
        <Inputs 
        divInput="input-group"
        type='text'
        value={name}
        label='Nombre'
        update={updateName}
        placeholder='Nombre'
        classValue='nameValue form-control'
        visibility='hidden'/>
        <p className="pValue"></p>
        <div onClick={onSubmit} className="checkBtn ml-3 btn btn-color padding-10 mt-0"><i className="fas fa-check"></i></div>
    </form>
    )
}

export default Clientname