export function Age({age}){
 return (
    <div>
        <p>Your age is {age}</p>
        {age >= 18  ? <p>Your age is {age}</p>:<p>errore;</p> }
        {age ? <p>Your age is {age}</p>:<p>errore;</p> }
        {age > 18 && age < 65 ? <p>Your age is {age}</p>:<p>errore;</p> }
        
    </div>    
)
}