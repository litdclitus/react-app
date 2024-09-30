import { useState } from 'react';

const TodoNew = (props) => {
    const { addTodo } = props;
    const [valueInput, setValueInput] = useState("Lit")

    const handleOnClick = () => {
        addTodo(valueInput);
    }
    const handleOnChange = (value) => {
        setValueInput(value);
    }

    // const searchKeyPress = (e) => {
    //     // look for window.event in case event isn't passed in
    //     e = e || window.event;
    //     if (e.keyCode == 13) {
    //         document.getElementById('input-btn').click();
    //         return false;
    //     }
    //     return true;
    // }

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
                onChange={(event) => handleOnChange(event.target.value)} />
            <button id="input-btn" onClick={handleOnClick}
            >Add</button>
            <div>Type input: {valueInput}</div>
        </div>
    );
}
export default TodoNew;