import './BottomNav.css';


function BottomNav(props){
    
    function navClick(page){
        // let name = this.innerHTML
        props.setPage(page)
    }

    // function completeAll(){
    //     console.log()
    // }


    return (
        <div className='navContainer'>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => {navClick(false)}}>To-do</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => {navClick(true)}}>Completed</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => {navClick('All')}}>All</button>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => {navClick('Complete all')}}>Complete all</button>
                </div>
                <div className="col">
                    <button className="btn btn-light w-100 opacity-75" onClick={() => {navClick('Restore')}}>Restore</button>
                </div>
            </div>
        </div>
    )
}

export default BottomNav