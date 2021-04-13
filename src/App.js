import './App.css';
import React, {useState} from 'react'
import TodoList from './TodoList';


function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const itemEvent = e => {
    setInput(e.target.value);
  }

  const listOfItems = () => {
    setTodos((oldTodo) => {
      return [...oldTodo, input]
    })
    setInput("")
  }

  const deleteTodo = (id) => {
    setTodos((oldTodo) => {
      return oldTodo.filter((arrayElement, index) => {
            return index!== id
          })
        })
    }

  return (
    <>
      <div className="main">
        <div className="main-box"> <br/>
          <h1>ToDo List</h1>
          <br />
          
          <input
            type="text"
            placeholder="Add a ToDo"
            name="todo"
            value={input}
            onChange= {itemEvent}
          />
          <button onClick={listOfItems}>+</button>

          <br /><br />
          <ol>
            {/* <li>{input}</li> */}
            {todos.map((todo, index)=>{
              return <TodoList
                key={index}
                id={index}
                text={todo}
                onSelect = {deleteTodo}
              />
            })}
          </ol>
          
        </div>
      </div>
    
    
    
    </>
  );
}

export default App;
