import './components/todo/todo.css';
import TodoNew from './components/todo/todonew';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';

const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className="todo-img">
        <img src={ReactLogo} alt="" className='logo' />
      </div>
    </div>
  );
}

export default App
