import './components/todo/todo.css';
import TodoNew from './components/todo/todonew';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, content: "learning English" },
    // { id: 2, content: "watching Netflix" }
  ])

  const addTodo = (content) => {
    const newTodo = {
      id: randomIntFromInterval(1, 999999),
      content: content
    }
    setTodoList([...todoList, newTodo]);
  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const afterDeleteTodo = todoList.filter(item => item.id !== id);
    setTodoList(afterDeleteTodo);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addTodo={addTodo}
      />

      {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className="todo-img">
          <img src={ReactLogo} alt="" className='logo' />
        </div>
      } */}

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className="todo-img">
          <img src={ReactLogo} alt="" className='logo' />
        </div>}

    </div>
  );
}

export default App
