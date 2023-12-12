import { Age } from "./Age";

export function Welcome({name,age}){
    return( 
    <div>
    <p>Welcome <strong>{name}</strong>!</p> 
    <p>Your age is {age}</p>
    {age >= 18  ? <p>Your age is {age}</p>:<p>errore;</p> }
    {age ? <p>Your age is {age}</p>:<p>errore;</p> }      
    {age > 18 && age < 65 ? <p>Your age is {age}</p>:<p>errore;</p> }
    {age > 18 && age < 65 && name === "Jhon" ? <p>Your age is {age}</p>:<p>errore;</p> }
    </div>
    )
}