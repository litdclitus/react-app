
const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    const handleOnClick = (id) => {
        console.log(id);
        deleteTodo(id);
    }

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.content}</div>
                        <button className="close-btn" onClick={() => handleOnClick(item.id)}>Delete</button>
                    </div>
                )
            })}
        </div >
    );
}
export default TodoData;