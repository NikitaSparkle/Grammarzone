import './Translate.css';
import {NavLink} from "react-router-dom";
import React, {useRef} from "react";

function Translate() {

    const a1Ref = useRef(null);
    const a2Ref = useRef(null);
    const b1Ref = useRef(null);
    const b2Ref = useRef(null);

    const a1BtnRef = useRef(null)
    const a2BtnRef = useRef(null)
    const b1BtnRef = useRef(null)
    const b2BtnRef = useRef(null)

    function show_a1() {
        const a1 = a1Ref.current;
        const a2 = a2Ref.current;
        const b1 = b1Ref.current;
        const b2 = b2Ref.current;

        const a1_btn = a1BtnRef.current;
        const a2_btn = a2BtnRef.current;
        const b1_btn = b1BtnRef.current;
        const b2_btn = b2BtnRef.current;

        a1.style.display = "inline-block";
        a2.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";

        a1_btn.style.background = "rgba(35, 101, 213, 0.86)";
        a1_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        a1_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        a1_btn.style.color = "#ffffff";

        a2_btn.style.background = "rgb(211, 211, 211)";
        a2_btn.style.border = "unset";
        a2_btn.style.boxShadow = "unset";
        a2_btn.style.color = "unset";

        b1_btn.style.background = "rgb(211, 211, 211)";
        b1_btn.style.border = "unset";
        b1_btn.style.boxShadow = "unset";
        b1_btn.style.color = "unset";

        b2_btn.style.background = "rgb(211, 211, 211)";
        b2_btn.style.border = "unset";
        b2_btn.style.boxShadow = "unset";
        b2_btn.style.color = "unset";
    }

    function show_a2() {
        const a1 = a1Ref.current;
        const a2 = a2Ref.current;
        const b1 = b1Ref.current;
        const b2 = b2Ref.current;

        const a1_btn = a1BtnRef.current;
        const a2_btn = a2BtnRef.current;
        const b1_btn = b1BtnRef.current;
        const b2_btn = b2BtnRef.current;

        a2.style.display = "inline-block";
        a1.style.display = "none";
        b1.style.display = "none";
        b2.style.display = "none";


        a2_btn.style.background = "rgba(35, 101, 213, 0.86)";
        a2_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        a2_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        a2_btn.style.color = "#ffffff";

        a1_btn.style.background = "rgb(211, 211, 211)";
        a1_btn.style.border = "unset";
        a1_btn.style.boxShadow = "unset";
        a1_btn.style.color = "unset";

        b1_btn.style.background = "rgb(211, 211, 211)";
        b1_btn.style.border = "unset";
        b1_btn.style.boxShadow = "unset";
        b1_btn.style.color = "unset";

        b2_btn.style.background = "rgb(211, 211, 211)";
        b2_btn.style.border = "unset";
        b2_btn.style.boxShadow = "unset";
        b2_btn.style.color = "unset";
    }

    function show_b1() {
        const a1 = a1Ref.current;
        const a2 = a2Ref.current;
        const b1 = b1Ref.current;
        const b2 = b2Ref.current;

        const a1_btn = a1BtnRef.current;
        const a2_btn = a2BtnRef.current;
        const b1_btn = b1BtnRef.current;
        const b2_btn = b2BtnRef.current;

        b1.style.display = "inline-block";
        a1.style.display = "none";
        a2.style.display = "none";
        b2.style.display = "none";


        b1_btn.style.background = "rgba(35, 101, 213, 0.86)";
        b1_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        b1_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        b1_btn.style.color = "#ffffff";

        a1_btn.style.background = "rgb(211, 211, 211)";
        a1_btn.style.border = "unset";
        a1_btn.style.boxShadow = "unset";
        a1_btn.style.color = "unset";

        a2_btn.style.background = "rgb(211, 211, 211)";
        a2_btn.style.border = "unset";
        a2_btn.style.boxShadow = "unset";
        a2_btn.style.color = "unset";

        b2_btn.style.background = "rgb(211, 211, 211)";
        b2_btn.style.border = "unset";
        b2_btn.style.boxShadow = "unset";
        b2_btn.style.color = "unset";
    }

    function show_b2() {
        const a1 = a1Ref.current;
        const a2 = a2Ref.current;
        const b1 = b1Ref.current;
        const b2 = b2Ref.current;

        const a1_btn = a1BtnRef.current;
        const a2_btn = a2BtnRef.current;
        const b1_btn = b1BtnRef.current;
        const b2_btn = b2BtnRef.current;

        b2.style.display = "inline-block";
        a1.style.display = "none";
        a2.style.display = "none";
        b1.style.display = "none";


        b2_btn.style.background = "rgba(35, 101, 213, 0.86)";
        b2_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        b2_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        b2_btn.style.color = "#ffffff";

        a1_btn.style.background = "rgb(211, 211, 211)";
        a1_btn.style.border = "unset";
        a1_btn.style.boxShadow = "unset";
        a1_btn.style.color = "unset";

        a2_btn.style.background = "rgb(211, 211, 211)";
        a2_btn.style.border = "unset";
        a2_btn.style.boxShadow = "unset";
        a2_btn.style.color = "unset";

        b1_btn.style.background = "rgb(211, 211, 211)";
        b1_btn.style.border = "unset";
        b1_btn.style.boxShadow = "unset";
        b1_btn.style.color = "unset";
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

                <div className={"level-cont"}>
                    <div onClick={show_a1} ref={a1BtnRef} className={"level-btn"}>A1</div>
                    <div onClick={show_a2} ref={a2BtnRef} className={"level-btn"}>A2</div>
                    <div onClick={show_b1} id={"b1_btn"} ref={b1BtnRef} className={"level-btn"}>B1</div>
                    <div onClick={show_b2} id={"b2_btn"} ref={b2BtnRef} className={"level-btn"}>B2</div>
                </div>

                <div ref={a1Ref} className={"test-cont"}>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                </div>

                <div ref={a2Ref} className={"test-cont"}>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                </div>

                <div ref={b1Ref} className={"test-cont"}>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                </div>

                <div ref={b2Ref} className={"test-cont"}>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                    <NavLink className={"test-btn"} to={"/test"}>Test</NavLink>
                </div>

            </div>
        </div>
    );
}
export default Translate;