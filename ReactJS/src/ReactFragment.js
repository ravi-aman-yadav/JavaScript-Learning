import { Tab } from "bootstrap";
import { Fragment } from "react";
import ReactFragmentChild from "./ReactFragmentChild";

function ReactFragment() {
    return(
        // used to hide extra element which is unneccesory
        <div>
            <h1>React Fragment</h1>
            <table>
                <tbody>
                    <tr>
                        <ReactFragmentChild />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReactFragment;
