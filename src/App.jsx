import './components/todo/todo.css';
import TodoNew from './components/todo/todonew';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';

const App = () => {
  const name = "lit";
  const age = 25;
  const data = {
    address: "HCM",
    quote: "Difficult roads often lead to beautiful destinations"
  };
  const addTodo = (name) => {
    alert(`Call me ${name}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addTodo={addTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className="todo-img">
        <img src={ReactLogo} alt="" className='logo' />
      </div>
    </div>
  );
}

export default App
