import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react';
import Input from './Input';
import List from './List';
import BottomNav from './BottomNav';

function App() {

    const [page, setPage] = useState('To-do List')

    return (
        <div>
            {/* <div className="row">
                <div className="col">
                    <h1 className='text-center text-primary'>Stuff</h1>
                </div>
            </div> */}

            <div className="row">
                <div className="col">
                    <Input />
                    <List />
                    <BottomNav />
                </div>
            </div>

            {/* <div className="row">
                <div className="col">

                </div>
            </div>

            <div className="row">
                <div className="col">

                </div>
            </div> */}
        </div>
    )
}

export default App