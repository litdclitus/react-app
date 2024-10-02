import './components/todo/todo.css';
import TodoNew from './components/todo/todonew';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Background from './components/layout/background'


const App = () => {
  const [todoList, setTodoList] = useState([
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
    <>
      <Header />
      <Background />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addTodo={addTodo}
        />

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
      <Footer />
    </>
  )
}

export default App
