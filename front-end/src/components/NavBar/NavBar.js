import '../NavBar/NavBar.css';
import {NavLink} from "react-router-dom";
import User from "../user/User";

function NavBar(){
    return <>
        <NavLink className={"main-head"} to={"/"}><h2>Grammarzone</h2></NavLink>
        <nav className={"navbar"}>
            <NavLink className={"navbutton"} to={'/translate'}>Translate</NavLink>
            <NavLink className={"navbutton"} to={'/reading'}>Reading</NavLink>
            <NavLink className={"navbutton"} to={'/writing'}>Writing</NavLink>
            <NavLink className={"navbutton"} to={'/materials'}>Materials</NavLink>
            <NavLink style={{display:sessionStorage.getItem('token')?'none':'flex'}} className={"navbutton"} to={'/login'}>Login</NavLink>
            <NavLink style={{display:sessionStorage.getItem('token')?'flex':'none'}} className={"navbutton"} to={'/user'}>Cabinet</NavLink>
        </nav>
    </>

}

export default NavBar;