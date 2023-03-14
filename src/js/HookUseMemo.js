/*
 Hook useMemo 샘플소스 만들어봄
*/
import React,{useMemo,useState} from "react";

const hardCalculate = (number) => {
    console.log('어려운 계산');
    for(let i = 0 ; i < 99999999; i++) {}

    return number + 10000;
};

const easyCalculate = (number) => {
    console.log('쉬운 계산');
  
    return number + 1;
};

const HookUseMemo = () => {

    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasydNumber] = useState(1);
   
    // HookUseMemo 함수가 호출될 때마다 아래 hardCalculate함수도 매번 호출됨
    // const hardSum = hardCalculate(hardNumber);

    // HookUseMemo 함수가 처음호출될때 ,[hardNumber]값이 바뀔때 호출된다
    const hardSum = useMemo(() => {
        return  hardCalculate(hardNumber);
    },[hardNumber]);

    const eaySum = easyCalculate(easyNumber);
    
    return (
        <div>
            <h3>어려운 계산기</h3>
            <input 
                type="number"
                value={hardNumber}
                onChange={(e) => setHardNumber(parseInt(e.target.value))} />
                <span> + 10000 = {hardSum} </span>

            <h3>쉬운 계산기</h3>
            <input 
                type="number"
                value={easyNumber}
                onChange={(e) => setEasydNumber(parseInt(e.target.value))} />
                <span> + 10000 = {eaySum} </span>
        </div>
    );
};

export default HookUseMemo;