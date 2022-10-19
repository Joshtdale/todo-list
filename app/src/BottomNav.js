function BottomNav(){
    return (
        <>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75">To-do</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75">Completed</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75">All</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75">Complete all</button>
                </div>
                <div className="col">
                    <button className="btn btn-secondary w-100 opacity-75">Restore</button>
                </div>
            </div>
        </>
    )
}

export default BottomNav