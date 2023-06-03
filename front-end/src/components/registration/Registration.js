import React, { useState, useRef } from "react";
import "./Registration.css";
import { NavLink, useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repasswordRef = useRef(null);

    function Register() {
        const login = loginRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rePassword = repasswordRef.current.value;
        const confirmed = false;

        console.log(login);
        console.log(email);
        console.log(password);
        console.log(confirmed);

        if(password!=rePassword){
            alert("Password is wrong");
        }else{
            fetch("https://grandmen.herokuapp.com/registration", {
                method: "Post",
                headers: {
                    accept: "text/plain",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    token: sessionStorage.getItem("token"),
                },
                body: JSON.stringify({
                    login: login,
                    email: email,
                    password: password,
                    confirmed: confirmed,
                }),
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("OK");
                        navigate("/login");
                    } else if (response.status === 401) {
                        console.log("request has not been completed");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }

    return (
        <div>
            <NavLink className={"main-head"} to={"/"}>
                <h2>Grammarzone</h2>
            </NavLink>

            <nav className={"navbar"}>
                <NavLink className={"navbutton"} to={"/translate"}>
                    Translate
                </NavLink>
                <NavLink className={"navbutton"} to={"/reading"}>
                    Reading
                </NavLink>
                <NavLink className={"navbutton"} to={"/writing"}>
                    Writing
                </NavLink>
                <NavLink className={"navbutton"} to={"/materials"}>
                    Materials
                </NavLink>
                <NavLink className={"navbutton"} to={"/login"}>
                    Login
                </NavLink>
            </nav>

            <div className={"main-cont"}>
                <form className={"form-cont"}>
                    <label>Login</label>
                    <input ref={loginRef} type={"text"} />
                    <label>Email</label>
                    <input ref={emailRef} type={"email"} />
                    <label>Password</label>
                    <input ref={passwordRef} type={"password"} />
                    <label>Re-enter Password</label>
                    <input ref={repasswordRef} type={"password"} />
                    <input
                        onClick={Register}
                        className={"submit-btn"}
                        type={"button"}
                        value={"Submit"}
                    />
                    <div className={"register-form"}>
                        <NavLink className={"login-btn"} to={"/login"}>
                            Login
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
