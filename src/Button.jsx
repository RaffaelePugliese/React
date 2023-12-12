export function AllertButton(){
    function HandleButtonClick(){
        const now = new Date

        alert (`the current date is ${now.toLocaleTimeString()}`)
    }
    return <div>
        <p>Click here below if you want to see the time</p>
        <button onClick={HandleButtonClick}>Click here</button>
    </div>
}