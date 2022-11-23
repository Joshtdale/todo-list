function TopNav(props){

    function navClick(page) {
        props.setPage(page)
    }

    return (
        <div className="row my-4 text-center">
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
    )
}

export default TopNav