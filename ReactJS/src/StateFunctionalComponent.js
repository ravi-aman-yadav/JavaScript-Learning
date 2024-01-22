import {useState} from "react";

function StateFunctionalComponent() {
    const [data, setData] = useState(0);
    function updateData() {
        // setData("siddu");
        setData(data+1);
    }
    return(
        <div className="StateFunctionalComponent">
            <h1>State in React</h1>
            <h3>{data}</h3>
            <button onClick={updateData}>state click me</button>
        </div>
    )
}

export default StateFunctionalComponent;
