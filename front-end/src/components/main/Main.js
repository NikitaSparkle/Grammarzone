import './Main.css';
import {NavLink} from "react-router-dom";
import Shabrat from "./photos/shabrat.png";
import Shevchenko from "./photos/shevhcneko.png";

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

            <div className={"main-main-cont"}>

                <div className={"main-title"}>
                    Welcome to Grammarzone!
                </div>
                <div className={"main-text-gray"}>
                    <h3 className={"main-text"}>
                        We are excited to introduce you to our web application, developed as a qualification project by
                        two
                        dedicated students. Our goal was to create a convenient and effective tool that can serve as a
                        reliable
                        assistant for learning the English language.
                    </h3>
                </div>
                <div className={"main-text-blue"}>
                    <h3 className={"main-text"}>
                        In the modern world, proficiency in English holds immense value. It opens doors to new
                        opportunities,
                        enables easier communication, and helps overcome challenges in both personal and professional
                        life.
                        We
                        understand the importance of developing language skills and strive to provide users with an easy
                        and
                        efficient path towards improvement.
                    </h3>
                </div>
                <div className={"main-text-gray"}>
                    <h3 className={"main-text"}>
                        Grammarzone offers a wide range of resources and exercises, designed with a focus on the
                        fundamental
                        aspects of English grammar. Here, you will find educational materials to support your learning
                        journey,
                        as well as tests to reinforce your knowledge and track your progress.
                    </h3>
                </div>
                <div className={"main-text-blue"}>
                    <h3 className={"main-text"}>
                        We hope that Grammarzone becomes your trusted partner in learning the English language. Whether
                        you
                        are
                        a student, a teacher, or simply an English enthusiast, our application will provide you with
                        valuable
                        tools for successful education. Welcome to Grammarzone, your new assistant in mastering the
                        English
                        language!
                    </h3>
                </div>
                <div className={"main-text-gray"}>
                    <h3 className={"main-text"}>
                        To get started, choose a test type: Translation, Reading, Writing. Then select your language
                        level and the test you want to take.
                        To access educational materials, go to the Materials tab.
                        Register and log in to track your progress.
                    </h3>
                </div>
                <div className={"main-text-blue"}>
                    <h3 className={"main-text"}>
                        Creators
                    </h3>
                </div>
                <div className={"main-text-gray-photo"}>
                    <img className={"main-text-blue-img"} src={Shabrat}/>
                    <h3 className={"main-text"}>
                        Alexey Shabrat
                        <br/>
                        KN 19-1 group of
                        <br/>
                        Dnipro Technological University "STEP"
                    </h3>
                </div>
                <div className={"main-text-blue-photo"}>
                    <img className={"main-text-gray-img"} src={Shevchenko}/>
                    <h3 className={"main-text"}>
                        Nikita Shevchenko
                        <br/>
                        KN 19-1 group of
                        <br/>
                        Dnipro Technological University "STEP"
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Main;