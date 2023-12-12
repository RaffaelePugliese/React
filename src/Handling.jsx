export function Handling({name}) {
    function HandleButtonOnClick(event) {
        console.log(event.target.name);
    }
    return <button name="one" onClick={HandleButtonOnClick}> Click me</button>
}