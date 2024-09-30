
const TodoNew = (props) => {
    const { addTodo } = props;
    // const [inputValue, setInputValue] = useState("lit");
    // addTodo("lit");
    const handleOnClick = () => {
        console.log(">>click")
    }
    const handleOnChange = (value) => {
        console.log(value)
    }

    return (
        <div className="todo-input">
            <input type="text" id="input-box" placeholder='Enter your task'
                onChange={(event) => handleOnChange(event.target.value)} />
            <button id="input-btn" onClick={handleOnClick}
            >Add</button>
            <div>Type input:</div>
        </div>
    );
}
export default TodoNew;