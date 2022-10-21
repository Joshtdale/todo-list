


function List(props) {

    // let filter = props.page
    let todoItems = ''

    let leftToDo = props.storage.filter((item) => item.completed === false)

    if (props.page === 'All') {
        todoItems = props.storage;
    } else {
        todoItems = props.storage.filter((item) => item.completed === props.page)
    }


    function complete(item) {

        const completedItem = [...props.storage]
        const id = completedItem.find(todo => todo.id === item)
        id.completed = !id.completed
        props.setStorage(completedItem)

    }


    function handleRemoveItem(id) {
        const leftOver = props.storage.filter((item) => item.id !== id)
        props.setStorage(leftOver)
    };


    function Todo() {
        return (
            <div>
                <div className="row">
                    <div className="col text-center">
                        <p>Left to do: {leftToDo.length}</p>
                    </div>
                </div>
                <div className="overflow-auto">

                    {todoItems.map((item) => {
                        let border = 'card border-success'
                        let textDecoration = ''
                        let greenbtn = 'h-50 btn rounded-circle border-success mt-2'
                        
                        if (item.completed === true) {
                            border = 'card border-danger mb-2'
                            textDecoration = "text-decoration-line-through"
                            greenbtn = 'h-50 btn rounded-circle border-success mt-2 disabled opacity-10'
                        } else {
                            border = 'card border-success mb-2'
                        }

                        return (
                            <div className={border} key={item.id}>
                                <div className="row text-center">
                                    <div className="col m-2">
                                        <button onClick={() => complete(item.id)} className={greenbtn}></button>
                                    </div>
                                    <div className="col m-2">
                                        <p className={textDecoration} >{item.text}</p>
                                    </div>
                                    <div className="col m-2">
                                        <button onClick={() => handleRemoveItem(item.id)} className="h-50 btn rounded-circle border-danger mt-2"></button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
        )
    }



    return (
        <div className="card h-75 border-light overflow-auto">
            <Todo />
        </div>
    )
}

export default List