import React from 'react'
import {v4 as uuidv4} from 'uuid'
const InputForm = ({inputText , setInputText , todos , setTodos}) => {

    const handleChange =(e)=>{
        setInputText(e.target.value)
    }

    const handleClick=()=>{
        setTodos([...todos , {
            text : inputText,
            id :uuidv4(),
            isDone :false
        }])
    }
  return (
    <div className="my-form">
      <h1>Ready for something Great Today ..</h1>

      <input type="text" placeholder="Enter Todo .." onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default InputForm