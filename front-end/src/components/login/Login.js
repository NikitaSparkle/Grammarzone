import './Login.css';
import { NavLink, useNavigate } from "react-router-dom";
import {useRef, useState} from "react";

function Login() {
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    function Login(){

        const login = loginRef.current.value;
        const password = passwordRef.current.value;

        console.log(login);
        console.log(password);

        fetch("https://grandmen.herokuapp.com/login", {
            method: "Post",
            headers: {
                accept: "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                token: sessionStorage.getItem("token"),
            },
            body: JSON.stringify({
                login: login,
                password: password
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("OK");
                    navigate("/User");
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

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

                <form className={"form-cont"}>
                    <label>Login</label>
                    <input ref={loginRef} type={"email"}/>
                    <label>Password</label>
                    <input ref={passwordRef} type={"password"}/>
                    <input onClick={Login} value={"Submit"} className={"submit-btn"} type={"button"}/>
                    <div className={"register-form"}>
                        <h1>Do not have account yet?</h1>
                        <br/>
                        <NavLink className={"register-btn"} to={'/registration'}>Register</NavLink>
                    </div>
                </form>

            </div>
        </div>
    );
}
export default Login;