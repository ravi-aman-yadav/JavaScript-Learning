import { useEffect, useState } from "react"

function UserEffectReact() {
    const [count, setCount] = useState(0);
    function updateCount() {
        setCount(count + 1);
    }
    useEffect(() => {
        alert("useEffect")
    })
    return(
        <div>
            <h1>UseEffect is react {count}</h1>
            <button onClick={updateCount}>update counter</button>
        </div>
    )
}

export default UserEffectReact;
