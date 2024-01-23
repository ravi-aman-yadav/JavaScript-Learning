import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function ReactRouter() {
    return(
        <div>
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path="/" excat={true} element={<Home />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Nav(){
    return(
        <>
            <Link to='/home'> <button>Home</button>  </Link>
            <Link to='/about'> <button>About</button>  </Link>
        </>
    )
}

export default ReactRouter;
