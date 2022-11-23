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
                <div className="col btn-group mr-2" role="group">
                    <button className="btn btn-secondary w-100 opacity-75" onClick={() => { navClick(false) }} type="button">To-do</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75" onClick={() => { navClick(true) }} type="button">Completed</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75" onClick={() => { navClick('All') }} type="button">All</button>
                </div>
            </div>
            <div className="row mt-2 text-center">
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75" onClick={() => { completeOrRestore(todoStuff) }}>Complete all</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75" onClick={() => { completeOrRestore(completedStuff) }}>Restore</button>
                </div>
            </div>
        </div>
    )
}

export default BottomNav