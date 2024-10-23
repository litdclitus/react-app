import { useState } from 'react';
import { BiSolidMessageSquareError } from "react-icons/bi";


const TodoNew = (props) => {
    const { addTodo } = props;

    const [valueInput, setValueInput] = useState("")

    const [error, setError] = useState('');

    const handleOnClick = (event) => {
        event.preventDefault();
        if (valueInput.trim() === '') {
            setError('Please enter your plan!');
        } else {
            // Xử lý dữ liệu hợp lệ
            addTodo(valueInput);
            setValueInput("");
        }

    }

    const handleOnChange = (value) => {
        setValueInput(value);
        setError(''); // Xóa thông báo lỗi khi người dùng nhập
    }

    return (
        <div className="todo-input">
            <input
                name="name" required
                type="text" id="input-box"
                placeholder='Enter your task'
                onKeyPress={(event) => { //Trigger submit input with Enter-key
                    event = event || window.event;
                    if (event.key == 'Enter') {
                        document.getElementById('input-btn').click();
                        return false;
                    }
                    return true;
                }}
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput} />

            <button id="input-btn" onClick={handleOnClick}>Add
            </button>
            {error &&
                <div className="error-message">
                    <BiSolidMessageSquareError />
                    <span style={{ marginLeft: 5 }}>{error}</span>
                </div>}
        </div>
    )
}

export default TodoNew;