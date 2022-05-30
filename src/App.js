/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable default-case */

import {  useState } from 'react';
import './Styles.css';

function App() {

  // usestate declared
   const [calc,setCalc]=useState("");
   const [result,setResult]= useState("");

  //  array declared for operators
     const ops =['/','-','*','+','.']

    //  creating ddigits dynamically
   const createDigits = () =>{
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button  onClick={()=>updateCalc(i.toString())} key = {i}>{i}</button>
      )
      
    }
    return digits;
  }

   //  finding the value of calculation
   const updateCalc = (value) =>{
    if (ops.includes(value) && calc==='' || 
        ops.includes(value) && ops.includes(calc.slice(-1))
       ) 
    {
      return;
    }

    setCalc(calc+value)
     if(!ops.includes(value)){
       setResult(eval(calc+value).toString());
     }
 }

  // adding function to = operatoor
   const evaluate =()=>{
     setCalc(eval(calc).toString())
   }

  //  deleting  previous items
   const delLast =()=>{
     if (calc==''){
       return;
     }
     const value = calc.slice(0,-1);
     setCalc(value);
   }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {/* showing result and previous result  */}
          {result?<span>({result})</span>:''}&nbsp;
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc("/")}>/</button>
          <button onClick={()=>updateCalc("+")}>+</button>
          <button onClick={()=>updateCalc("*")}>*</button>
          <button onClick={()=>updateCalc("-")}>-</button>
          <button onClick={delLast}>Del</button>
        </div>
        <div className='digits'>
          {createDigits()}
          <button onClick={()=>updateCalc("0")} >0</button>
          <button onClick={()=>updateCalc(".")} >.</button>

          <button onClick={ evaluate} >=</button>
        </div>
      </div>
    </div>
  )
}

export default App
