import { useState } from "react"

function ReactUseState () {
    // const [data, setData] = useState({
    //     name : 'Aman',
    //     age : 21
    // })
    // return(
    //     <div>
    //         <h1>My name is {data.name} and age is {data.age}</h1>
    //     </div>
    // )

    //Updating objects and array in state
    
    const [data, setData] = useState({
        name : 'aman',
        age : 23
    })
    return(
        <div>
            <h1>My name is {data.name} and age is {data.age}</h1>
            <button onClick={() => setData({...data, name : 'Kakkort'})}>Click me</button>
        </div>
    )
}

export default ReactUseState;
