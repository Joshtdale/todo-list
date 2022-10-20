


function List(props) {

    // let filter = props.page
    let todoItems = ''
    
    if (props.page === 'All'){
        todoItems = props.storage;
    } else {
        todoItems = props.storage.filter((item) => item.completed === props.page)
    }
    // console.log(filter)
    // .map((item) => 
    //     <div className="card" key={item.id}>
    //         <div className="row text-center">
    //             <div className="col m-2">
    //                 <button className="btn rounded-circle border-success"></button>
    //             </div>
    //             <div className="col m-2">
    //                 <h3>{item}</h3>
    //             </div>
    //             <div className="col m-2">
    //                 <button className="btn rounded-circle border-danger"></button>
    //             </div>
    //         </div>
    //     </div>
    // // console.log(todoItems)
    // )
    // return (
    //     <div>{todoItems}</div>
    // )

    function Todo() {
        // console.log(props.storage[0].text)
        return (
            <div>
                <div className="overflow-auto">

                    {todoItems.map((item) => {

                            return (
                                <div className="card" key={item.id}>
                                    <div className="row text-center">
                                        <div className="col m-2">
                                            <button className="btn rounded-circle border-success"></button>
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

    // function Completed() {
    //     return (
    //         <div>
    //             <h3 className="card">Completed</h3>
    //             <h3 className="card">Completed</h3>
    //             <h3 className="card">Completed</h3>
    //         </div>
    //     )
    // }

    // function All() {
    //     return (
    //         <div>
    //             <h3>To-do</h3>
    //             <Todo />
    //             <h3>Completed</h3>
    //             <Completed />
    //         </div>
    //     )
    // }




    // console.log(props.page)

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