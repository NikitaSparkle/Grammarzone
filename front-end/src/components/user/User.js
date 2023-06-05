import '../user/User.css';
import {NavLink} from "react-router-dom";
import {useRef} from "react";

function User() {

    const HistoryRef = useRef(null);
    const SetRef = useRef(null);

    const LoginEdit = useRef(null);
    const LoginSave = useRef(null);
    const EmailEdit = useRef(null);
    const EmailSave = useRef(null);
    const PassEdit = useRef(null);
    const PassSave = useRef(null);



    function show_user(){
        const user = HistoryRef.current;
        const set = SetRef.current;
        user.style.display = "flex";
        set.style.display = "none";
    }

    function show_set(){
        const user = HistoryRef.current;
        const set = SetRef.current;
        set.style.display = "flex";
        user.style.display = "none";
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
                    <div onClick={show_user} className={"menu-btn"}>History</div>
                    <div onClick={show_set} className={"menu-btn"}>Settings</div>
                </div>

                <div ref={HistoryRef} className={"history-cont"}>
                    <table className={"history-table"}>
                        <thead>
                        <tr>
                            <th>Название теста</th>
                            <th>Тип теста</th>
                            <th>Уровень теста</th>
                            <th>Количество баллов</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Тест 1</td>
                            <td>Writing</td>
                            <td>B1</td>
                            <td>10</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div ref={SetRef} className={"settings-cont"}>
                    <form className={"set-form"}>
                        <br/>
                        <lable>Login</lable>
                        <input className={"set-input"} type={"text"}/>
                        <button className={"edit-btn"} ref={LoginEdit}>Edit</button>
                        <button className={"save-btn"} ref={LoginSave}>Save</button>
                        <br/>
                        <lable>Email</lable>
                        <input className={"set-input"} type={"text"}/>
                        <button className={"edit-btn"} ref={EmailEdit}>Edit</button>
                        <button className={"save-btn"} ref={EmailSave}>Save</button>
                        <br/>
                        <lable>Password</lable>
                        <input className={"set-input"} type={"text"}/>
                        <button className={"edit-btn"} ref={PassEdit}>Edit</button>
                        <button className={"save-btn"} ref={PassSave}>Save</button>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default User;