function Input() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="What the hell are you doing" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Create</button>
            </div>
        </div>
    )
}

export default Input