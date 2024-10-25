import { MdDoneOutline } from "react-icons/md";

import { RiDeleteBinLine } from "react-icons/ri";

const TodoData = (props) => {
    const { todoList, deleteTodo, toggleTodo } = props;

    const handleOnClickDelete = (id) => {
        deleteTodo(id);
    }

    const handleToggleTodo = (id) => {
        toggleTodo(id);
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`}
                        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                        key={item.id}>
                        <div className="todo-text">{item.content}</div>
                        <div className="todo-btn">
                            <button className="toggle-btn" style={{ marginRight: 15 }}
                                onClick={() => { handleToggleTodo(item.id) }}>
                                <MdDoneOutline />
                            </button>
                            <button className="close-btn"
                                onClick={() => handleOnClickDelete(item.id)}>
                                <RiDeleteBinLine />
                            </button>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default TodoData;