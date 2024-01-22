import { useState } from "react";

function BasicForm() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [intrest, setIntrest] = useState("");
    function getFormData(e) {
        console.warn(name, tnc, intrest);
        e.preventDefault()
    }
    return(
        <div>
            <h1>html handle form in reactjs</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e) => setName(e.target.value)} /> <br /> <br /> 
                <select onChange={(e) => setIntrest(e.target.value)}>
                    <option>Select option</option>
                    <option>marvel</option>
                    <option>dc</option>
                    <option>krish</option>
                    <option>shaktiman</option>
                </select>
                <br /> <br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /><span>Accept terms and condition</span>
                <br /> <br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default BasicForm;
