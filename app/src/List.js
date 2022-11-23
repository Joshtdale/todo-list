import trash from './images/trash.svg'


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
        setTimeout(() => {
            const completedItem = [...props.storage]
            const id = completedItem.find(todo => todo.id === item)
            id.completed = !id.completed
            props.setStorage(completedItem)
        }, "300")

    }


    function handleRemoveItem(id) {
        setTimeout(() => {
            const leftOver = props.storage.filter((item) => item.id !== id)
            props.setStorage(leftOver)
        }, "300")

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
                        let border = 'card mb-2 border-success'
                        let textDecoration = ''
                        // let greenbtn = 'h-50 btn rounded-circle border-success mt-2 bg-success'

                        if (item.completed === true) {
                                border = 'card border-danger opacity-75 mb-2'
                            textDecoration = "text-decoration-line-through"
                            //     greenbtn = 'h-50 btn rounded-circle border-success mt-2 disabled bg-success opacity-10'
                        }
                        //  else {
                        //     border = 'card border-success mb-2'
                        // }

                        return (
                            <div className={border} key={item.id}>
                                <div className="row text-center">
                                    <div className="col m-2 d-flex justify-content-center align-items-center">
                                        {/* <button onClick={() => complete(item.id)} className={greenbtn}></button> */}
                                        <div class="form-check">
                                            <input onClick={() => complete(item.id)} class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                            {/* <label class="form-check-label" for="flexCheckDefault">
                                                    Default checkbox
                                                </label> */}
                                        </div>
                                    </div>
                                    <div className="col m-2">
                                        <p className={textDecoration} >{item.text}</p>
                                    </div>
                                    <div className="col m-2 d-flex justify-content-center align-items-center">
                                        <i onClick={() => handleRemoveItem(item.id)}><img src={trash} className="btn"></img></i>
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