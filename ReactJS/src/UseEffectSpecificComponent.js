import { useEffect } from "react";

function UseEffectSpecificComponent(props) {

    useEffect(() => {
        alert("You are changing count data")
    }, [props.count])

    return(
        <div>
            <h1>Count Props : {props.count}</h1>
            <h1>Count Data : {props.data}</h1>
        </div>
    )
}

export default UseEffectSpecificComponent;
