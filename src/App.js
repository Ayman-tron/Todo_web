import './App.css';
import React, {useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); // This prevents a REFRESH
    setTodos([...todos, input]);
    setInput("")
  }
  return (
    <div className = "App">
    <h1>Hello World</h1>
    <form>
      <input value = {input} 
      onChange = {event => setInput(event.target.value)} 
      type = "text"/>
      <button type = "submit" onClick={addTodo}>Add to do</button>
      </form>
    <h2>List of Todos</h2>
    {todos.map((todo) => (
    <p>{todo}</p>))}
    </div>
  );
}

export default App;
