import '../user/User.css';
import {NavLink} from "react-router-dom";
import {useRef} from "react";

function User() {

    const UserRef = useRef(null);
    const AchRef = useRef(null);
    const SetRef = useRef(null);

    function show_user(){
        const user = UserRef.current;
        const ach = AchRef.current;
        const set = SetRef.current;
        user.style.display = "flex";
        ach.style.display = "none";
        set.style.display = "none";
    }
    function show_ach(){
        const user = UserRef.current;
        const ach = AchRef.current;
        const set = SetRef.current;
        ach.style.display = "flex";
        user.style.display = "none";
        set.style.display = "none";
    }
    function show_set(){
        const user = UserRef.current;
        const ach = AchRef.current;
        const set = SetRef.current;
        set.style.display = "flex";
        user.style.display = "none";
        ach.style.display = "none";
    }

    return (
        <div>

            <NavLink className={"main-head"} to={"/"}><h2>Grammarzone</h2></NavLink>

            <nav className={"navbar"}>
                <NavLink className={"navbutton"} to={'/translate'}>Translate</NavLink>
                <NavLink className={"navbutton"} to={'/reading'}>Reading</NavLink>
                <NavLink className={"navbutton"} to={'/writing'}>Writing</NavLink>
                <NavLink className={"navbutton"} to={'/materials'}>Materials</NavLink>
            </nav>

            <div className={"user-main-cont"}>

                <div className={"top-menu"}>
                    <div onClick={show_user} className={"menu-btn"}>User</div>
                    <div onClick={show_ach} className={"menu-btn"}>Achievements</div>
                    <div onClick={show_set} className={"menu-btn"}>Settings</div>
                </div>

                <div ref={UserRef} className={"user-cont"}>
                    User cont
                </div>

                <div ref={AchRef} className={"achievement-cont"}>
                    Ach cont
                </div>

                <div ref={SetRef} className={"settings-cont"}>
                    <form className={"set-form"}>
                        <br/>
                        <lable>Login</lable>
                        <input className={"set-input"} type={"text"}/>
                        <br/>
                        <lable>Email</lable>
                        <input className={"set-input"} type={"text"}/>
                        <br/>
                        <lable>Password</lable>
                        <input className={"set-input"} type={"text"}/>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default User;