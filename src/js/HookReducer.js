import React,{useState ,useReducer} from "react";


const ACTION_TYPE = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}
/*
 * state는 money값이 들어옴
 * action는 dispatch요청시 호출됨
*/
const reducerFunc = (state,action) => {
    console.log('reducer가 일을 합니다.',state,action);
    switch(action.type){
        case ACTION_TYPE.deposit: //입금
            return state + action.payload;
        case ACTION_TYPE.withdraw: //출금
                return state - action.payload;
        default :
            return state;
    }
   
}

// reducer  - state를 업데이트 하는 역활(은행)
// dispatch - state를 업데이트를 위한 요구
// action   - 요구의 내용
const HookReducer = () => {
    const [number ,setNumber] = useState(0);
    const [money ,dispatch] = useReducer(reducerFunc,0);
    
    return (
        <div>
            <h2>useReducer 은행에 오신것을 환영합니다.</h2>
            <p>잔고: {money}원</p>
            <input type='number' value={number} 
            onChange={(e) => setNumber(parseInt(e.target.value))} 
            step="1000"/>
            <button onClick={() => dispatch({ type: ACTION_TYPE.deposit , payload: number })}>예금</button>
            <button onClick={() => dispatch({ type: ACTION_TYPE.withdraw, payload: number })}>출금</button>
        </div>
    )
}

export default HookReducer;