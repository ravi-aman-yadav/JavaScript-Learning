import React,{useState} from "react";

function HideAndShow() {
    const [status, setStatus] = useState(true);
   return(
    <div>
        {
            status? <h1>hello world</h1> : null
        }
        <h1>Hide and show element</h1>
        {/* <button onClick={() => setStatus(false)}>hide</button>
        <button onClick={() => setStatus(true)}>show</button> */}
        <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
   )
}

export default HideAndShow;
