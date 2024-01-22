import { useState } from "react";

function PropsFuctional(props) {
    let variableName = props.name
    const [name, setName] = useState(variableName);

    return(
        <div>
            <h3>{name}</h3>
            <button onClick={() => {setName("ravi")}}>update name</button>
        </div>
    )

    // Function passes as a props
    
    // return(
    //     <div>
    //         <button onClick={props.fun}>function props</button>
    //     </div>
    // )
}

export default PropsFuctional;
