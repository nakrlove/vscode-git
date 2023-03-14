import React,{ useEffect,useContext } from 'react';
import { HookCountContext } from "../js/HookUseStatus";


const Timer = (props) => {
    const { count } = useContext(HookCountContext);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("타이머 들어가는중...");
        },1000);

        return () => {
            console.log("클리어 ... count:"+count);
            clearInterval(timer);
        }  
     
    },[]);
  

    return (
        <div>
            <span>타이머를 시작합니다. 콘솔을 보세요!</span>
        </div>
    )
}

export default Timer;