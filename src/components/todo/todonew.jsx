import { useState } from 'react';

const TodoNew = (props) => {
    const { addTodo } = props;
    const [valueInput, setValueInput] = useState("")

    const handleOnClick = () => {
        addTodo(valueInput);
        setValueInput("");
    }
    const handleOnChange = (value) => {
        setValueInput(value);
    }

    return (
        <div className="todo-input">
            <input type="text" id="input-box" placeholder='Enter your task' onKeyPress={(event) => {
                event = event || window.event;
                if (event.key == 'Enter') {
                    document.getElementById('input-btn').click();
                    return false;
                }
                return true;
            }
            } //Trigger submit input with Enter-key
                onChange={(event) => handleOnChange(event.target.value)} value={valueInput} />
            <button id="input-btn" onClick={handleOnClick}
            >Add</button>
        </div>
    );
}
export default TodoNew;