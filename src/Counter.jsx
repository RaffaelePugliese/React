import { useState } from "react";
import { Button1,Button2,Button3, CounterDisplay } from "./Increase";


export function InitialValue() {
    const [Counter,setCounter]= useState(0)
   function IncreaseButton(){
      setCounter((c)=>{
      return c + 1
      })
    }
    function DecreaseButton(){
        setCounter((c)=>{
        return c - 1
        })
    }
    function ResetButton(){
        setCounter((c)=>{
        return 0
        })
    }
 return <div>
       <CounterDisplay Counter={Counter} />
      <Button1 onClick={IncreaseButton} label="Increase" /> 
      <Button2 onClick={DecreaseButton} label="Decrease" /> 
      <Button3 onClick={ResetButton} label="Reset" /> 
  </div>
}

// the parameter should be a function because react read all the function every time there is an event and it can be that the parameter restart
// from the beginner counter