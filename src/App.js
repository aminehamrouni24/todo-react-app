import React , {useState} from 'react'
import './App.css';
import InputForm from './components/InputForm';
import TodosList from './components/TodosList';

function App() {
  // state of the input 
  const [inputText , setInputText]=useState('')
  // the todos state
  const [todos , setTodos]=useState([])
  return (
    <div className="App">
      <InputForm
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      />
      <TodosList
      todos={todos}
      setTodos= {setTodos}/>
    </div>
  );
}

export default App;
