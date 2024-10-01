
const TodoData = (props) => {
    const { todoList } = props;

    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log("check object: ", item)
                return (
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.content}</div>
                        <button className="close-btn">Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
export default TodoData;