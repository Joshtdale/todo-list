


function List(props){

function Todo(){
    // console.log(props.storage)
    return (
        <div>
            <div className="card overflow-auto">
                        {props.storage.map((item) => {

                            return (
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <h3>{item}</h3>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                        }
                    </div>
        </div>
    )
}

function Completed(){
    return (
        <div>
            <h3 className="card">Completed</h3>
            <h3 className="card">Completed</h3>
            <h3 className="card">Completed</h3>
        </div>
    )
}

function All(){
    return (
        <div>
            <h3>To-do</h3>
            <Todo />
            <h3>Completed</h3>
            <Completed />
        </div>
    )
}




    // console.log(props.page)

    return (
        <div className="card border-light">
            {props.page == 'To-do' && <Todo />}
            {props.page == 'Completed' && <Completed />}
            {props.page == 'All' && <All/>}
        </div>
    )
}

export default List