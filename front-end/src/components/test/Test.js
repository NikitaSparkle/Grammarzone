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

            <div className={"test-main-cont"}>

                <div className={"test-test-cont"}>
                    <div className={"test-name"}>Test Name</div>
                    <div className={"test-text"}>Test Text Test Text Test Text Test Text Test Text Test Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                        Test Text Test Text Test Text Test Text Test Text Test Text Test Text Test TextTest Text Test Text
                    </div>
                    <div className="answers-cont">
                        <div className="answer-row">
                            <div className={"answer-num"}>1</div>
                            <label>
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                            </label>
                        </div>
                        <br/>
                        <div className="answer-row">
                            <div className={"answer-num"}>2</div>
                            <label>
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                                <input className={"row"} type="checkbox" value="Answer" />Answer
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Test;