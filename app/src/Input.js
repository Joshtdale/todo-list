function Input(props) {
    // console.log(props.value)

const input = document.getElementById('input')

    function pushToStorage(){
        console.log('clicked')
        // console.log(props.value)
        props.storage(props.value);
        console.log(props.storage)
        // console.log(input.value)
        input.value = '';
    }

    return (
        <div className="input-group mb-3">
            <input onChange={(e) => props.setValue(e.target.value)} id="input" type="text" className="form-control" placeholder="What the hell are you doing" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
                <button onClick={pushToStorage} className="btn btn-outline-secondary" type="button">Create</button>
            </div>
        </div>
    )
}

export default Input