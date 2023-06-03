import './Main.css';
import {NavLink} from "react-router-dom";

function Main() {

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

                This is Main Page

            </div>
        </div>
    );
}

export default Main;