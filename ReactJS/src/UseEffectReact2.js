import { useEffect, useState } from "react"
import UseEffectSpecificComponent from "./UseEffectSpecificComponent";

function UserEffectReact2() {

    const [data, setData] = useState(10);
    const [count, setCount] = useState(100);

    useEffect(() => {
        // alert("You are updating your data")
    })

    return(
        <div>
            {/* <h1>Count : {count}</h1>
            <h1>Data : {data}</h1> */}
            <UseEffectSpecificComponent count={count} data={data} />
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <button onClick={() => setData(data + 1)}>Update Data</button>
        </div>
    )
}

export default UserEffectReact2;
