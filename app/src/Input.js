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

    return (
        <div className="input-group mb-3">
            <input onChange={(e) => setValue(e.target.value)} id="input" type="text" className="form-control" placeholder="What the hell are you doing" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
                <button onClick={pushToStorage} className="btn btn-outline-secondary" type="button">Create</button>
            </div>
        </div>
    )
}

export default Input