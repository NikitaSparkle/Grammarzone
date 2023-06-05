import "./AdminLogin.css"
import { NavLink, useNavigate } from "react-router-dom";
import {useRef, useState} from "react";

function AdminLogin(){
    const navigate = useNavigate();
    const AdminloginRef = useRef(null);
    const AdminPasswordRef = useRef(null);

    return(
        <div>
            <NavLink className={"main-head"} to={"/"}><h2>Grammarzone</h2></NavLink>

            <nav className={"navbar"}>
                <NavLink className={"navbutton"} to={'/translate'}>Translate</NavLink>
                <NavLink className={"navbutton"} to={'/reading'}>Reading</NavLink>
                <NavLink className={"navbutton"} to={'/writing'}>Writing</NavLink>
                <NavLink className={"navbutton"} to={'/materials'}>Materials</NavLink>
                <NavLink className={"navbutton"} to={'/login'}>Login</NavLink>
            </nav>

            <div className={"admin-main-cont"}>
                <form className={"admin-form-cont"}>
                    <label>Admin Login</label>
                    <input ref={AdminloginRef} type={"email"}/>
                    <label>Admin Password</label>
                    <input ref={AdminPasswordRef} type={"password"}/>
                    <input value={"Submit"} className={"admin-submit-btn"} type={"button"}/>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;