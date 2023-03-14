import React,{useState ,useReducer} from "react";
import Student from "./Student";

const initState = {
    count: 0,
    students: [],
}
const ACTION_TYPE = {
    addstudent: 'add-student',
    deletestudent: 'delete-student',
}
/*
 * state는 money값이 들어옴
 * action는 dispatch요청시 호출됨
*/
const reducerFunc = (state,action) => {
    console.log('reducer가 일을 합니다.',state,action);
    switch(action.type){
        case ACTION_TYPE.addstudent: //추가
           const name = action.payload.name;
           const newStudent =
            { 
                id: Date.now(),
                name: name,
                isHere: false,
            }
            return {
                count: state.count + 1,
                students: [...state.students,newStudent],
            }
        case ACTION_TYPE.deletestudent: //삭제
            return {
                count: state.count - 1,
                students: state.students.filter((student) => 
                    student.id !== action.payload.id
                ),
            }
        case 'mark-student' :
            return {
                count: state.count,
                students: state.students.map((student) => {
                   if( student.id === action.payload.id )
                   {
                    return { ...student,isHere: !student.isHere}
                   }
                }),
            }
        default :
            return state;
    }
   
}

// reducer  - state를 업데이트 하는 역활(은행)
// dispatch - state를 업데이트를 위한 요구
// action   - 요구의 내용
const HookReducer2 = () => {
    const [name ,setName] = useState('');
    const [studentsInfo ,dispatch] = useReducer(reducerFunc,initState);
    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.count}</p>
    
            <input type='text' 
            placeholder="이름을 입력해주세요!"
            value={name} 
            onChange={(e) => setName(e.target.value)} />
            <button onClick={(e) => {
                dispatch({type:ACTION_TYPE.addstudent,payload: {name }})
            }}>추가</button>
            {
                studentsInfo.students.map(student =>{
                    return (<Student key={student.id} 
                                     name={student.name} 
                                     dispatch={dispatch} 
                                     id={student.id}
                                     isHere={student.isHere}
                                     />);
                })
            }
        </div>
    )
}

export default HookReducer2;