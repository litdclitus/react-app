
const TodoData = (props) => {
    const { name, age, data } = props;

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>learning English</div>
            <div>watching Youtube</div>
            <div>playing Video game</div>
        </div>
    );
}
export default TodoData;