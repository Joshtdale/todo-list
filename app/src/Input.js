import { useState } from 'react';

function Input(props) {
    const [value, setValue] = useState('')


    const input = document.getElementById('input')

    function pushToStorage() {
        // console.log('clicked');
        if (input.value !== '') {
            props.storage(previousTodos => {
                return [...previousTodos, {
                    id: props.time,
                    text: value,
                    completed: false,
                },]
            })

            input.value = '';
        }
    }


    const handleKeyDown = event => {
        if (event.key === 'Enter') {
            pushToStorage()
        }
    };

    return (
        <div className="input-group mb-3">
            <input onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} id="input" type="text" className="form-control" placeholder="Add something to your todo list" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
                <button onClick={pushToStorage} className="btn opacity-75 bg-secondary text-light" type="button">Create</button>
            </div>
        </div>
    )
}

export default Input