
const TodoData = (props) => {
    const { name, data, todoList } = props;

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>learning English</div>
            <div>watching Netflix</div>
            <div>playing Video game</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}
export default TodoData;