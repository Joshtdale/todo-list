import { useState } from 'react';

function Input(props) {
    // console.log(props.time)
    const [value, setValue] = useState('')


    // let nextId = 1;
    const input = document.getElementById('input')

    function pushToStorage() {
        console.log('clicked');
        // console.log(props.value)
        // props.storage([
        //     ...,
        //     {
        //         id: props.time,
        //         text: value,
        //         done: false,
        //     },
        // ]);

        props.storage(previousTodos => {
            return [...previousTodos, {
                id: props.time,
                text: value,
                done: false,
            },]
        })
        // console.log(props.storage);
        // console.log(input.value)
        input.value = '';
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