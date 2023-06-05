import "./Admin.css"
import {NavLink, useNavigate} from "react-router-dom";
import React, {useRef, useState} from "react";

function Admin() {

    const admTranslateBtnRef = useRef(null);
    const admReadingBtnRef = useRef(null);
    const admWritingBtnRef = useRef(null);
    const admMaterialsBtnRef = useRef(null);
    const admUsersBtnRef = useRef(null);

    const admTranslateCont = useRef(null);
    const admReadingCont = useRef(null);
    const admWritingCont = useRef(null);
    const admMaterialsCont = useRef(null);
    const admUsersCont = useRef(null);

    const translateTableTopBtn = useRef(null);
    const translateAddTopBtn = useRef(null);
    const translateTableCont = useRef(null);
    const translateAddCont = useRef(null);

    const readingTableTopBtn = useRef(null);
    const readingAddTopBtn = useRef(null);
    const readingTableCont = useRef(null);
    const readingAddCont = useRef(null);

    const writingTableTopBtn = useRef(null);
    const writingAddTopBtn = useRef(null);
    const writingTableCont = useRef(null);
    const writingAddCont = useRef(null);

    const materialsTableTopBtn = useRef(null);
    const materialsAddTopBtn = useRef(null);
    const materialsTableCont = useRef(null);
    const materialsAddCont = useRef(null);

    const usersTableTopBtn = useRef(null);
    const usersAddTopBtn = useRef(null);
    const usersTableCont = useRef(null);
    const usersAddCont = useRef(null);

    function show_translate() {
        const translate_btn = admTranslateBtnRef.current;
        const reading_btn = admReadingBtnRef.current;
        const writing_btn = admWritingBtnRef.current;
        const materials_btn = admMaterialsBtnRef.current;
        const users_btn = admUsersBtnRef.current;

        const translate_cont = admTranslateCont.current;
        const reading_cont = admReadingCont.current;
        const writing_cont = admWritingCont.current;
        const materials_cont = admMaterialsCont.current;
        const users_cont = admUsersCont.current;

        translate_cont.style.display = "flex";
        reading_cont.style.display = "none";
        writing_cont.style.display = "none";
        materials_cont.style.display = "none";
        users_cont.style.display = "none";

        translate_btn.style.background = "rgba(35, 101, 213, 0.86)";
        translate_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        translate_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        translate_btn.style.color = "#ffffff";

        reading_btn.style.background = "rgb(211, 211, 211)";
        reading_btn.style.border = "unset";
        reading_btn.style.boxShadow = "unset";
        reading_btn.style.color = "unset";

        writing_btn.style.background = "rgb(211, 211, 211)";
        writing_btn.style.border = "unset";
        writing_btn.style.boxShadow = "unset";
        writing_btn.style.color = "unset";

        materials_btn.style.background = "rgb(211, 211, 211)";
        materials_btn.style.border = "unset";
        materials_btn.style.boxShadow = "unset";
        materials_btn.style.color = "unset";

        users_btn.style.background = "rgb(211, 211, 211)";
        users_btn.style.border = "unset";
        users_btn.style.boxShadow = "unset";
        users_btn.style.color = "unset";
    }

    function show_translate_add() {
        const translate_table = translateTableCont.current
        const translate_add = translateAddCont.current

        translate_add.style.display = "flex";
        translate_table.style.display = "none";
    }

    function show_translate_table() {
        const translate_table = translateTableCont.current
        const translate_add = translateAddCont.current

        translate_table.style.display = "flex";
        translate_add.style.display = "none";
    }

    function show_reading() {
        const translate_btn = admTranslateBtnRef.current;
        const reading_btn = admReadingBtnRef.current;
        const writing_btn = admWritingBtnRef.current;
        const materials_btn = admMaterialsBtnRef.current;
        const users_btn = admUsersBtnRef.current;

        const translate_cont = admTranslateCont.current;
        const reading_cont = admReadingCont.current;
        const writing_cont = admWritingCont.current;
        const materials_cont = admMaterialsCont.current;
        const users_cont = admUsersCont.current;

        translate_cont.style.display = "none";
        reading_cont.style.display = "flex";
        writing_cont.style.display = "none";
        materials_cont.style.display = "none";
        users_cont.style.display = "none";

        reading_btn.style.background = "rgba(35, 101, 213, 0.86)";
        reading_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        reading_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        reading_btn.style.color = "#ffffff";

        translate_btn.style.background = "rgb(211, 211, 211)";
        translate_btn.style.border = "unset";
        translate_btn.style.boxShadow = "unset";
        translate_btn.style.color = "unset";

        writing_btn.style.background = "rgb(211, 211, 211)";
        writing_btn.style.border = "unset";
        writing_btn.style.boxShadow = "unset";
        writing_btn.style.color = "unset";

        materials_btn.style.background = "rgb(211, 211, 211)";
        materials_btn.style.border = "unset";
        materials_btn.style.boxShadow = "unset";
        materials_btn.style.color = "unset";

        users_btn.style.background = "rgb(211, 211, 211)";
        users_btn.style.border = "unset";
        users_btn.style.boxShadow = "unset";
        users_btn.style.color = "unset";
    }

    function show_reading_add() {
        const reading_table = readingTableCont.current
        const reading_add = readingAddCont.current

        reading_add.style.display = "flex";
        reading_table.style.display = "none";
    }

    function show_reading_table() {
        const reading_table = readingTableCont.current
        const reading_add = readingAddCont.current

        reading_table.style.display = "flex";
        reading_add.style.display = "none";
    }

    function show_writing() {
        const translate_btn = admTranslateBtnRef.current;
        const reading_btn = admReadingBtnRef.current;
        const writing_btn = admWritingBtnRef.current;
        const materials_btn = admMaterialsBtnRef.current;
        const users_btn = admUsersBtnRef.current;

        const translate_cont = admTranslateCont.current;
        const reading_cont = admReadingCont.current;
        const writing_cont = admWritingCont.current;
        const materials_cont = admMaterialsCont.current;
        const users_cont = admUsersCont.current;

        translate_cont.style.display = "none";
        reading_cont.style.display = "none";
        writing_cont.style.display = "flex";
        materials_cont.style.display = "none";
        users_cont.style.display = "none";

        writing_btn.style.background = "rgba(35, 101, 213, 0.86)";
        writing_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        writing_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        writing_btn.style.color = "#ffffff";

        translate_btn.style.background = "rgb(211, 211, 211)";
        translate_btn.style.border = "unset";
        translate_btn.style.boxShadow = "unset";
        translate_btn.style.color = "unset";

        reading_btn.style.background = "rgb(211, 211, 211)";
        reading_btn.style.border = "unset";
        reading_btn.style.boxShadow = "unset";
        reading_btn.style.color = "unset";

        materials_btn.style.background = "rgb(211, 211, 211)";
        materials_btn.style.border = "unset";
        materials_btn.style.boxShadow = "unset";
        materials_btn.style.color = "unset";

        users_btn.style.background = "rgb(211, 211, 211)";
        users_btn.style.border = "unset";
        users_btn.style.boxShadow = "unset";
        users_btn.style.color = "unset";
    }

    function show_writing_add() {
        const writing_table = writingTableCont.current
        const writing_add = writingAddCont.current

        writing_add.style.display = "flex";
        writing_table.style.display = "none";
    }

    function show_writing_table() {
        const writing_table = writingTableCont.current
        const writing_add = writingAddCont.current

        writing_table.style.display = "flex";
        writing_add.style.display = "none";
    }

    function show_materials() {
        const translate_btn = admTranslateBtnRef.current;
        const reading_btn = admReadingBtnRef.current;
        const writing_btn = admWritingBtnRef.current;
        const materials_btn = admMaterialsBtnRef.current;
        const users_btn = admUsersBtnRef.current;

        const translate_cont = admTranslateCont.current;
        const reading_cont = admReadingCont.current;
        const writing_cont = admWritingCont.current;
        const materials_cont = admMaterialsCont.current;
        const users_cont = admUsersCont.current;

        translate_cont.style.display = "none";
        reading_cont.style.display = "none";
        writing_cont.style.display = "none";
        materials_cont.style.display = "flex";
        users_cont.style.display = "none";

        materials_btn.style.background = "rgba(35, 101, 213, 0.86)";
        materials_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        materials_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        materials_btn.style.color = "#ffffff";

        translate_btn.style.background = "rgb(211, 211, 211)";
        translate_btn.style.border = "unset";
        translate_btn.style.boxShadow = "unset";
        translate_btn.style.color = "unset";

        reading_btn.style.background = "rgb(211, 211, 211)";
        reading_btn.style.border = "unset";
        reading_btn.style.boxShadow = "unset";
        reading_btn.style.color = "unset";

        writing_btn.style.background = "rgb(211, 211, 211)";
        writing_btn.style.border = "unset";
        writing_btn.style.boxShadow = "unset";
        writing_btn.style.color = "unset";

        users_btn.style.background = "rgb(211, 211, 211)";
        users_btn.style.border = "unset";
        users_btn.style.boxShadow = "unset";
        users_btn.style.color = "unset";
    }

    function show_materials_add() {
        const materials_table =materialsTableCont.current
        const materials_add = materialsAddCont.current

        materials_add.style.display = "flex";
        materials_table.style.display = "none";
    }

    function show_materials_table() {
        const materials_table = materialsTableCont.current
        const materials_add = materialsAddCont.current

        materials_table.style.display = "flex";
        materials_add.style.display = "none";
    }

    function show_users() {
        const translate_btn = admTranslateBtnRef.current;
        const reading_btn = admReadingBtnRef.current;
        const writing_btn = admWritingBtnRef.current;
        const materials_btn = admMaterialsBtnRef.current;
        const users_btn = admUsersBtnRef.current;

        const translate_cont = admTranslateCont.current;
        const reading_cont = admReadingCont.current;
        const writing_cont = admWritingCont.current;
        const materials_cont = admMaterialsCont.current;
        const users_cont = admUsersCont.current;

        translate_cont.style.display = "none";
        reading_cont.style.display = "none";
        writing_cont.style.display = "none";
        materials_cont.style.display = "none";
        users_cont.style.display = "flex";

        users_btn.style.background = "rgba(35, 101, 213, 0.86)";
        users_btn.style.border = "1px solid rgba(35, 101, 213, 0.86)";
        users_btn.style.boxShadow = "0px 0px 10px 0px rgba(35, 101, 213, 0.86)";
        users_btn.style.color = "#ffffff";

        translate_btn.style.background = "rgb(211, 211, 211)";
        translate_btn.style.border = "unset";
        translate_btn.style.boxShadow = "unset";
        translate_btn.style.color = "unset";

        reading_btn.style.background = "rgb(211, 211, 211)";
        reading_btn.style.border = "unset";
        reading_btn.style.boxShadow = "unset";
        reading_btn.style.color = "unset";

        writing_btn.style.background = "rgb(211, 211, 211)";
        writing_btn.style.border = "unset";
        writing_btn.style.boxShadow = "unset";
        writing_btn.style.color = "unset";

        materials_btn.style.background = "rgb(211, 211, 211)";
        materials_btn.style.border = "unset";
        materials_btn.style.boxShadow = "unset";
        materials_btn.style.color = "unset";
    }

    function show_users_add() {
        const users_table = usersTableCont.current
        const users_add = usersAddCont.current

        users_add.style.display = "flex";
        users_table.style.display = "none";
    }

    function show_users_table() {
        const users_table = usersTableCont.current
        const users_add = usersAddCont.current

        users_table.style.display = "flex";
        users_add.style.display = "none";
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

                <div className={"admin-tables-cont"}>
                    <div onClick={show_translate} ref={admTranslateBtnRef} className={"table-btn"}>Translate Tests</div>
                    <div onClick={show_reading} ref={admReadingBtnRef} className={"table-btn"}>Reading Tests</div>
                    <div onClick={show_writing} ref={admWritingBtnRef} className={"table-btn"}>Writing Tests</div>
                    <div onClick={show_materials} ref={admMaterialsBtnRef} className={"table-btn"}>Materials</div>
                    <div onClick={show_users} ref={admUsersBtnRef} className={"table-btn"}>Users</div>
                </div>

                <div ref={admTranslateCont} className={"translate-cont"}>
                    <div className={"translate-top-btn"}>
                        <div onClick={show_translate_table} ref={translateTableTopBtn} className={"top-btn"}>Table</div>
                        <div onClick={show_translate_add} ref={translateAddTopBtn} className={"top-btn"}>Add</div>
                    </div>
                    <div ref={translateTableCont} className={"translate-table-cont"}>
                        <table className={"translate-table"}>
                            <thead>
                            <tr>
                                <th>Test Id</th>
                                <th>Test Name</th>
                                <th>Test Type</th>
                                <th>Test Lvl</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0</td>
                                <td>Test 1</td>
                                <td>Translate</td>
                                <td>B1</td>
                                <div className={"translate-delete"} >Delete</div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div ref={translateAddCont} className={"translate-add-cont"}>
                        <form className={"translate-form"}>
                            <lable>Test Name</lable>
                            <input className={"translate-name"} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea className={"translate-textarea"}/>
                            <br/>
                            <div className={"translate-question-form"}>
                                <lable>Question 1</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 2</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 3</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 4</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 5</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 6</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 7</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 8</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 9</lable>
                                <input className={"translate-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"translate-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                                <input className={"translate-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} className={"translate-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>


                <div ref={admReadingCont} className={"reading-cont"}>
                    <div className={"reading-top-btn"}>
                        <div onClick={show_reading_table} ref={translateTableTopBtn} className={"top-btn"}>Table</div>
                        <div onClick={show_reading_add} ref={translateAddTopBtn} className={"top-btn"}>Add</div>
                    </div>
                    <div ref={readingTableCont} className={"reading-table-cont"}>
                        <table className={"reading-table"}>
                            <thead>
                            <tr>
                                <th>Test Id</th>
                                <th>Test Name</th>
                                <th>Test Type</th>
                                <th>Test Lvl</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0</td>
                                <td>Test 1</td>
                                <td>Translate</td>
                                <td>B1</td>
                                <div className={"reading-delete"} >Delete</div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div ref={readingAddCont} className={"reading-add-cont"}>
                        <form className={"reading-form"}>
                            <lable>Test Name</lable>
                            <input className={"reading-name"} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea className={"reading-textarea"}/>
                            <br/>
                            <div className={"reading-question-form"}>
                                <lable>Question 1</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 2</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 3</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 4</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 5</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 6</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 7</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 8</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 9</lable>
                                <input className={"reading-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"reading-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                                <input className={"reading-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} className={"reading-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>

                <div ref={admWritingCont} className={"writing-cont"}>
                    <div className={"writing-top-btn"}>
                        <div onClick={show_writing_table} ref={writingTableTopBtn} className={"top-btn"}>Table</div>
                        <div onClick={show_writing_add} ref={writingAddTopBtn} className={"top-btn"}>Add</div>
                    </div>
                    <div ref={writingTableCont} className={"writing-table-cont"}>
                        <table className={"writing-table"}>
                            <thead>
                            <tr>
                                <th>Test Id</th>
                                <th>Test Name</th>
                                <th>Test Type</th>
                                <th>Test Lvl</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0</td>
                                <td>Test 1</td>
                                <td>Translate</td>
                                <td>B1</td>
                                <div className={"writing-delete"} >Delete</div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div ref={writingAddCont} className={"reading-add-cont"}>
                        <form className={"writing-form"}>
                            <lable>Test Name</lable>
                            <input className={"writing-name"} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea className={"writing-textarea"}/>
                            <br/>
                            <div className={"writing-question-form"}>
                                <lable>Question 1</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 2</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 3</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 4</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 5</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 6</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 7</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 8</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 9</lable>
                                <input className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                                <input className={"writing-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} className={"writing-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>

                <div ref={admMaterialsCont} className={"materials-cont"}>
                    <div className={"materials-top-btn"}>
                        <div onClick={show_materials_table} ref={writingTableTopBtn} className={"top-btn"}>Table</div>
                        <div onClick={show_materials_add} ref={writingAddTopBtn} className={"top-btn"}>Add</div>
                    </div>
                    <div ref={materialsTableCont} className={"materials-table-cont"}>
                        <table className={"materials-table"}>
                            <thead>
                            <tr>
                                <th>Material Id</th>
                                <th>Material Name</th>
                                <th>Material Type</th>
                                <th>Material Link</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0</td>
                                <td>Material 1</td>
                                <td>True</td>
                                <td>link</td>
                                <div className={"materials-delete"} >Delete</div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div ref={materialsAddCont} className={"materials-add-cont"}>
                        <form className={"materials-form"}>
                            <lable>Name</lable>
                            <input className={"materials-name"} type={"text"}/>
                            <br/>
                            <lable>Link</lable>
                            <input className={"materials-name"} type={"text"}/>
                            <br/>
                            <lable>is Video?</lable>
                            <input className={"materials-name"} type={"checkbox"}/>
                            <br/>
                            <input value={"Submit"} className={"materials-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>

                <div ref={admUsersCont} className={"users-cont"}>
                    <div className={"users-top-btn"}>
                        <div onClick={show_users_table} ref={usersTableTopBtn} className={"top-btn"}>Table</div>
                        <div onClick={show_users_add} ref={usersAddTopBtn} className={"top-btn"}>Add</div>
                    </div>
                    <div ref={usersTableCont} className={"users-table-cont"}>
                        <table className={"users-table"}>
                            <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Login</th>
                                <th>User Email</th>
                                <th>User Password</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0</td>
                                <td>User 1</td>
                                <td>user@gmail.com</td>
                                <td>userpass</td>
                                <div className={"users-delete"} >Delete</div>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div ref={usersAddCont} className={"users-add-cont"}>
                        <form className={"users-form"}>
                            <lable>Name</lable>
                            <input className={"users-name"} type={"text"}/>
                            <br/>
                            <lable>Email</lable>
                            <input className={"users-name"} type={"text"}/>
                            <br/>
                            <lable>Password</lable>
                            <input className={"users-name"} type={"text"}/>
                            <br/>
                            <input value={"Submit"} className={"users-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Admin;