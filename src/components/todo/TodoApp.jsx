import TodoNew from './todonew';
import TodoData from './TodoData';
import './todo.css';
import ReactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = (content) => {
        // if (content.trim()) {
        const newTodo = {
            id: randomIntFromInterval(1, 999999),
            content: content,
            completed: false,
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

    const toggleTodo = (id) => {
        setTodoList(
            todoList.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addTodo={addTodo}
            />

            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                />
                :
                <div className="todo-img">
                    <img src={ReactLogo} alt="" className='logo' />
                </div>}
        </div>
    )
}
export default TodoApp;