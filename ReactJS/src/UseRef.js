import { useRef } from "react";

function UseRef() {
    let inputRef = useRef(null);
    function handleInput() {
        console.warn('hi ');
        inputRef.current.value = "1000";
        inputRef.current.focus();
    }
    return(
        <div>
            <h1>use Ref using funcitonal</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleInput}>Handle input</button>
        </div>
    )
}

export default UseRef;
