export function Handling() {
    function HandleButtonOnClick(event) {
        console.log(event.target.src);
    }
    return <button name="one"  onClick={HandleButtonOnClick}>
         <img src="csi" alt="photo" />
         Click me
         </button>
}