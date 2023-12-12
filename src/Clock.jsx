import { useEffect, useState } from "react";

export function Clock () {
    const [date, setDate] =useState(new Date())
    useEffect(()=>{
     const IntervallClock= setInterval(()=>{
     setDate(new Date())
     },1000)
     return()=>{ 
        clearInterval(IntervallClock)
     }
    },[])
    return <div>
        <p>current time : {date.toLocaleTimeString()}</p>
    </div>
}