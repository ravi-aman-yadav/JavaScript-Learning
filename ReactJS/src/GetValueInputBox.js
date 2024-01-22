import React, {useState} from "react";

function GetValueInputBox() {

    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    } 

    return(
        <div>
            <h1>Get Input Box value</h1>
            {
                print? <h1>{data}</h1> : null
            }
            <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>Print data</button>
        </div>
    )
}

export default GetValueInputBox;
