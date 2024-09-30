import './components/todo/todo.css';
import TodoNew from './components/todo/todonew';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, content: "learning English" },
    { id: 2, content: "watching Netflix" }
  ]);
  const name = "lit";
  const data = {
    address: "HCM",
    quote: "Difficult roads often lead to beautiful destinations"
  };
  const addTodo = (content) => {
    console.log(`>>>check input: ${content}`)
    const newTodo = {
      id: "random",
      content: content
    }
    setTodoList(content);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addTodo={addTodo}
      />
      <TodoData
        name={name}
        data={data}
        todoList={todoList}
      />
      <div className="todo-img">
        <img src={ReactLogo} alt="" className='logo' />
      </div>
    </div>
  );
}

export default App
