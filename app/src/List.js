


function List(props) {

    // let filter = props.page
    let todoItems = ''
    
    if (props.page === 'All'){
        todoItems = props.storage;
    } else {
        todoItems = props.storage.filter((item) => item.completed === props.page)
    }


    function complete(item, i){
        let id = item.id
        // console.log(c)
        // item.completed = true
        // console.log(props.storage[i])
        // props.setStorage(previousTodos => {
        //     return [...previousTodos, {
        //         id: item.id,
        //         text: item.text,
        //         completed: true,
        //     },]

            props.storage[i].completed = true
            props.setStorage(previousTodos => {
                    return [...previousTodos]
        })


    }

    function Todo() {
        // console.log(props.storage[0].text)
        return (
            <div>
                <div className="row">
                        <div className="col text-center">
                            <p>Left to do: {todoItems.length}</p>
                        </div>
                    </div>
                <div className="overflow-auto">

                    {todoItems.map((item, i) => {

                            return (
                                <div className="card" key={item.id}>
                                    <div className="row text-center">
                                        <div className="col m-2">
                                            <button onClick={() => complete(item, i)} className="btn rounded-circle border-success"></button>
                                        </div>
                                        <div className="col m-2">
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="col m-2">
                                            <button className="btn rounded-circle border-danger"></button>
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
        <div className="card border-light">
            {/* {todoItems} */}
            <Todo />
            {/* {props.page == false && <Todo />} */}
            {/* {props.page == true && <Completed />} */}
            {/* {props.page == 'All' && <All />} */}
        </div>
    )
}

export default List