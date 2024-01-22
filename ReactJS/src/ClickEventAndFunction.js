function ClickEventAndFunction() {
    let data = "aman";
    function Apple() {
        data = "yadav";
        alert(data)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={Apple}>click me</button>
            {/* <button onClick={() => alert("Hello")}>hello click me</button> */}
        </div>
    )
}

export default ClickEventAndFunction;
