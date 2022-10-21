import './BottomNav.css';


function BottomNav(props) {

    const todoStuff = props.storage.filter((item) => item.completed === false)
    const completedStuff = props.storage.filter((item) => item.completed === true)

    function navClick(page) {
        props.setPage(page)
    }

    function completeOrRestore(filter) {
        filter.forEach(element => {
            const completedItem = [...props.storage]
            const id = completedItem.find(todo => todo.id === element.id)
            id.completed = !id.completed
            props.setStorage(completedItem)

        });
    }


    return (
        <div className='navContainer'>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => { navClick(false) }}>To-do</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => { navClick(true) }}>Completed</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => { navClick('All') }}>All</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => { completeOrRestore(todoStuff) }}>Complete all</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => { completeOrRestore(completedStuff) }}>Restore</button>
                </div>
            </div>
        </div>
    )
}

export default BottomNav