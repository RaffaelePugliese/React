import { useState } from "react";

export function Counter() {
    const [Counter,setCounter]= useState(0)
   function HandleButton(){
    setCounter((c)=>{
    return c + 1
    })
   }
    return <div>
    <p>i have counted to {Counter}</p>
    <button onClick={HandleButton}>increase</button> 
     
    </div>
}

// the parameter should be a function because react read all the function every time there is an event and it can be that the parameter restart
// from the beginner counter