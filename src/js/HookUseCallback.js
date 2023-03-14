import React,{useCallback,useEffect,useState} from "react";

const HookUseCallback = () => {

    const [number,setNumber] = useState(0);
    const [toggle,setToggle] = useState(true);
    // const someFunction = () => {
    //     console.log(`someFunc: number: ${number}`);
    //     return;
    // }


    const someFunction = useCallback(() => {
        console.log(`someFunc: number: ${number}`);
        return;
    },[number]);

    useEffect(() => {
        console.log("useEffect 호출")
    },[someFunction]);

    return (
        <div>
          
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
           
            <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
            <br/>
            <button onClick={someFunction}>Call someFunc</button>
        </div>
    );
};

export default HookUseCallback;