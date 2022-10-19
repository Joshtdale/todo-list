import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react';
import Input from './Input';
import List from './List';
import BottomNav from './BottomNav';

function App() {
    
    
    const [storage, setStorage] = useState(['working'])
    // let arr = [{storage}]
    // console.log(storage)
    const [page, setPage] = useState('To-do')
    const [value, setValue] = useState('')
    // console.log(value)

    return (
        <div>

            <div className="row vh-75">
                <div className="col">
                    <Input setValue={setValue} value={value} storage={setStorage}/>
                    <List page={page} storage={storage}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <BottomNav setPage={setPage}/>
                </div>
            </div>

        </div>
    )
}

export default App