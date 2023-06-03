import './Test.css';
import {NavLink} from "react-router-dom";

function Test() {

    return (
        <div>

            <NavLink className={"main-head"} to={"/"}><h2>Grammarzone</h2></NavLink>

            <nav className={"navbar"}>
                <NavLink className={"navbutton"} to={'/translate'}>Translate</NavLink>
                <NavLink className={"navbutton"} to={'/reading'}>Reading</NavLink>
                <NavLink className={"navbutton"} to={'/writing'}>Writing</NavLink>
                <NavLink className={"navbutton"} to={'/materials'}>Materials</NavLink>
                <NavLink className={"navbutton"} to={'/login'}>Login</NavLink>
            </nav>

            <div className={"main-cont"}>

                This is Test Page

            </div>
        </div>
    );
}

export default Test;