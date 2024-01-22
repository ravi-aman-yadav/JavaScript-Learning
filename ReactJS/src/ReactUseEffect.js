import { useEffect, useState } from "react"

function ReactUseEffect() {
    
    const[count, setCount] = useState(0);

    //Runs in every render

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1);
    //     }, 1000);
    // })
    
    // return(
    //     <div>
    //         <h1>Timing : {count}</h1>
    //     </div>
    // )

    //runs in first render
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count+1);
    //     }, 1000)
    // }, [])
    // return(
    //     <div>
    //         <h1>Timing {count}</h1>
    //     </div>
    // )

    //Runs when data is change
    const [data, setData] = useState('');

    const handleChange = (e) => {
        setData(e.target.value)
    }

   useEffect(() => {
    setCount((count) => count + 1);
   }, [data]);

   return(
    <div>
        <input onChange={handleChange} value={data} />
        <p>{count}</p>
    </div>
   )

}

export default ReactUseEffect;
