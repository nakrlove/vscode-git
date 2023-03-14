import React from 'react'
import { useState,useEffect,createContext } from 'react';
import Timer from './Timer'


export const HookCountContext = createContext(null)

const HookUseStatus = () => {
   
    const [count,setCount] = useState(1);
    const [name,setName] = useState(1);

    const [showTimer, setShowTimer] = useState(false);

    const handleInputUpdate = () => {
        setCount(count + 1);
    }
    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log("랜더링 ")
    },[showTimer])

   
    return (
        <div>
             <HookCountContext.Provider value={{ count }}>
                {/* <input type='text' ref={inputRef} /> */}
                <button onClick={handleInputUpdate}>Update</button>
                <span>count: {count}</span>
                <input type='text' value={name} onChange={handleInputChange}/>
                <span>name: {name}</span>
                {showTimer && <Timer />}
                <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
            </HookCountContext.Provider>
        </div>
    );
};
export default HookUseStatus;