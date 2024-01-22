import { useState } from "react";

function Form() {

    const[email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`your email is ${email}`)
    }

    return(
        <div>
            <form onClick={handleSubmit}>
                <label>
                    enter your email :
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;
