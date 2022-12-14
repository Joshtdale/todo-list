import { useState, useEffect } from 'react'
import React from 'react';
import Input from './Input';
import List from './List';
import BottomNav from './BottomNav';
import TopNav from './TopNav'
import './app.css'
// var clock = ''

function App() {



    const [storage, setStorage] = useState((() => {
        return JSON.parse(localStorage.getItem("list")) || [];
    }))

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(storage))
    }, [storage]);

    const [page, setPage] = useState(false)

    // function getTime() {
    const time = new Date()
    var idTime = time.getTime()
    //     var hrs = time.getHours()
    //     var min = time.getMinutes()
    //     var sec = time.getSeconds()
    //     clock.innerText = `${hrs}` + ':' + `${min}` + ':' + `${sec}`
    //     console.log(clock)
    // console.log(idTime)
    // console.log(time)
    // }

    // setInterval(getTime, 1000)

    return (
        <div>
            {/* <div className="row">
                <div className='col'>
                    <h2 id="clock"></h2>
                </div>
            </div> */}

            <div className="row listHeight">
                <div className="col">
                    <Input storage={setStorage} time={idTime} />
                    <TopNav setPage={setPage} />
                    <List page={page} storage={storage} setStorage={setStorage} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BottomNav setPage={setPage} storage={storage} setStorage={setStorage} />
                </div>
            </div>

        </div>
    )
}

export default App