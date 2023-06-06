import "./Admin.css"
import {NavLink, useNavigate} from "react-router-dom";
import React, {useRef, useState} from "react";
import NavBar from "../NavBar/NavBar";

function Admin() {
    const navigate = useNavigate();

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

    const [translateName, setTranslateName] = useState('');
    const [translateText, setTranslateText] = useState('');
    const [translateData, setTranslateData] = useState([]);

    const readingTableTopBtn = useRef(null);
    const readingAddTopBtn = useRef(null);
    const readingTableCont = useRef(null);
    const readingAddCont = useRef(null);

    const [readingName, setReadingName] = useState('');
    const [readingText, setReadingText] = useState('');
    const [readingData, setReadingData] = useState([]);

    const writingTableTopBtn = useRef(null);
    const writingAddTopBtn = useRef(null);
    const writingTableCont = useRef(null);
    const writingAddCont = useRef(null);

    const [writingName, setWritingName] = useState('');
    const [writingText, setWritingText] = useState('');
    const [writingData, setWritingData] = useState([]);

    const [testLvl, setTestLvl] = useState('');
    const [questionOne, setQuestionOne] = useState('');
    const [queryOne, setQueryOne] = useState('');
    const [answerOneOne, setAnswerOneOne] = useState('');
    const [answerOneTwo, setAnswerOneTwo] = useState('');
    const [answerOneThree, setAnswerOneThree] = useState('');
    const [answerOneFour, setAnswerOneFour] = useState('');
    const [answerOneFive, setAnswerOneFive] = useState('');
    const [questionTwo, setQuestionTwo] = useState('');
    const [queryTwo, setQueryTwo] = useState('');
    const [answerTwoOne, setAnswerTwoOne] = useState('');
    const [answerTwoTwo, setAnswerTwoTwo] = useState('');
    const [answerTwoThree, setAnswerTwoThree] = useState('');
    const [answerTwoFour, setAnswerTwoFour] = useState('');
    const [answerTwoFive, setAnswerTwoFive] = useState('');
    const [questionThree, setQuestionThree] = useState('');
    const [queryThree, setQueryThree] = useState('');
    const [answerThreeOne, setAnswerThreeOne] = useState('');
    const [answerThreeTwo, setAnswerThreeTwo] = useState('');
    const [answerThreeThree, setAnswerThreeThree] = useState('');
    const [answerThreeFour, setAnswerThreeFour] = useState('');
    const [answerThreeFive, setAnswerThreeFive] = useState('');
    const [questionFour, setQuestionFour] = useState('');
    const [queryFour, setQueryFour] = useState('');
    const [answerFourOne, setAnswerFourOne] = useState('');
    const [answerFourTwo, setAnswerFourTwo] = useState('');
    const [answerFourThree, setAnswerFourThree] = useState('');
    const [answerFourFour, setAnswerFourFour] = useState('');
    const [answerFourFive, setAnswerFourFive] = useState('');
    const [questionFive, setQuestionFive] = useState('');
    const [queryFive, setQueryFive] = useState('');
    const [answerFiveOne, setAnswerFiveOne] = useState('');
    const [answerFiveTwo, setAnswerFiveTwo] = useState('');
    const [answerFiveThree, setAnswerFiveThree] = useState('');
    const [answerFiveFour, setAnswerFiveFour] = useState('');
    const [answerFiveFive, setAnswerFiveFive] = useState('');

    const materialsTableTopBtn = useRef(null);
    const materialsAddTopBtn = useRef(null);
    const materialsTableCont = useRef(null);
    const materialsAddCont = useRef(null);

    const [materialName, setMaterialName] = useState('')
    const [materialLink, setMaterialLink] = useState('')
    const [materialIsVideo, setMaterialIsVideo] = useState(false)
    const [materialData, setMaterialData] = useState([])

    const usersTableTopBtn = useRef(null);
    const usersAddTopBtn = useRef(null);
    const usersTableCont = useRef(null);
    // const usersAddCont = useRef(null);

    const [userData, setUserData] = useState([])


    function add_material_handler() {
        fetch("https://gramamrsone.herokuapp.com/material", {
            method: "Post",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
            body: JSON.stringify({
                name: materialName,
                link: materialLink,
                type: materialIsVideo,
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("OK");
                    setMaterialName('')
                    setMaterialLink('')
                    setMaterialIsVideo(false)
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function delete_material_handler(id) {
        fetch(`https://gramamrsone.herokuapp.com/material/${id}`, {
            method: "Delete",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    show_materials_table()
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

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

        fetch(`https://gramamrsone.herokuapp.com/test/?type_name=Translate&level_name=A1`, {
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("OK");
                response.json().then((data) => {
                    console.log(data)
                    setTranslateData(data)
                })
            } else if(response.status === 401){
                navigate("/admin");
            }
        })
            .catch((error) => {
                console.error("Error:", error);
            });
        translate_table.style.display = "flex";
        translate_add.style.display = "none";
    }

    function add_translate_handler() {
        fetch("https://gramamrsone.herokuapp.com/test", {
            method: "Post",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
            body: JSON.stringify({
                type_name: 'Translate',
                level_name: testLvl,
                name_task: translateName,
                text: translateText,
                answer: [{
                    question: questionOne,
                    query_answer: queryOne,
                    answer_1: answerOneOne,
                    answer_2: answerOneTwo,
                    answer_3: answerOneThree,
                    answer_4: answerOneFour,
                    answer_5: answerOneFive,
                },
                    {
                        question: questionTwo,
                        query_answer: queryTwo,
                        answer_1: answerTwoOne,
                        answer_2: answerTwoTwo,
                        answer_3: answerTwoThree,
                        answer_4: answerTwoFour,
                        answer_5: answerTwoFive,
                    },
                    {
                        question: questionThree,
                        query_answer: queryThree,
                        answer_1: answerThreeOne,
                        answer_2: answerThreeTwo,
                        answer_3: answerThreeThree,
                        answer_4: answerThreeFour,
                        answer_5: answerThreeFive,
                    },
                    {
                        question: questionFour,
                        query_answer: queryFour,
                        answer_1: answerFourOne,
                        answer_2: answerFourTwo,
                        answer_3: answerFourThree,
                        answer_4: answerFourFour,
                        answer_5: answerFourFive,
                    },
                    {
                        question: questionFive,
                        query_answer: queryFive,
                        answer_1: answerFiveOne,
                        answer_2: answerFiveTwo,
                        answer_3: answerFiveThree,
                        answer_4: answerFiveFour,
                        answer_5: answerFiveFive,
                    },
                ]
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("OK");
                    setTestLvl('')
                    setWritingName('')
                    setWritingText('')
                    setQuestionOne('')
                    setQueryOne('')
                    setAnswerOneOne('')
                    setAnswerOneTwo('')
                    setAnswerOneThree('')
                    setAnswerOneFour('')
                    setAnswerOneFive('')

                    setQuestionTwo('')
                    setQueryTwo('')
                    setAnswerTwoOne('')
                    setAnswerTwoTwo('')
                    setAnswerTwoThree('')
                    setAnswerTwoFour('')
                    setAnswerTwoFive('')

                    setQuestionThree('')
                    setQueryThree('')
                    setAnswerThreeOne('')
                    setAnswerThreeTwo('')
                    setAnswerThreeThree('')
                    setAnswerThreeFour('')
                    setAnswerThreeFive('')

                    setQuestionFour('')
                    setQueryFour('')
                    setAnswerFourOne('')
                    setAnswerFourTwo('')
                    setAnswerFourThree('')
                    setAnswerFourFour('')
                    setAnswerFourFive('')

                    setQuestionFive('')
                    setQueryFive('')
                    setAnswerFiveOne('')
                    setAnswerFiveTwo('')
                    setAnswerFiveThree('')
                    setAnswerFiveFour('')
                    setAnswerFiveFive('')
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
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

    function add_reading_handler() {
        fetch("https://gramamrsone.herokuapp.com/test", {
            method: "Post",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
            body: JSON.stringify({
                type_name: 'Read',
                level_name: testLvl,
                name_task: readingName,
                text: readingText,
                answer: [{
                    question: questionOne,
                    query_answer: queryOne,
                    answer_1: answerOneOne,
                    answer_2: answerOneTwo,
                    answer_3: answerOneThree,
                    answer_4: answerOneFour,
                    answer_5: answerOneFive,
                },
                    {
                        question: questionTwo,
                        query_answer: queryTwo,
                        answer_1: answerTwoOne,
                        answer_2: answerTwoTwo,
                        answer_3: answerTwoThree,
                        answer_4: answerTwoFour,
                        answer_5: answerTwoFive,
                    },
                    {
                        question: questionThree,
                        query_answer: queryThree,
                        answer_1: answerThreeOne,
                        answer_2: answerThreeTwo,
                        answer_3: answerThreeThree,
                        answer_4: answerThreeFour,
                        answer_5: answerThreeFive,
                    },
                    {
                        question: questionFour,
                        query_answer: queryFour,
                        answer_1: answerFourOne,
                        answer_2: answerFourTwo,
                        answer_3: answerFourThree,
                        answer_4: answerFourFour,
                        answer_5: answerFourFive,
                    },
                    {
                        question: questionFive,
                        query_answer: queryFive,
                        answer_1: answerFiveOne,
                        answer_2: answerFiveTwo,
                        answer_3: answerFiveThree,
                        answer_4: answerFiveFour,
                        answer_5: answerFiveFive,
                    },
                ]
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("OK");
                    setTestLvl('')
                    setWritingName('')
                    setWritingText('')
                    setQuestionOne('')
                    setQueryOne('')
                    setAnswerOneOne('')
                    setAnswerOneTwo('')
                    setAnswerOneThree('')
                    setAnswerOneFour('')
                    setAnswerOneFive('')

                    setQuestionTwo('')
                    setQueryTwo('')
                    setAnswerTwoOne('')
                    setAnswerTwoTwo('')
                    setAnswerTwoThree('')
                    setAnswerTwoFour('')
                    setAnswerTwoFive('')

                    setQuestionThree('')
                    setQueryThree('')
                    setAnswerThreeOne('')
                    setAnswerThreeTwo('')
                    setAnswerThreeThree('')
                    setAnswerThreeFour('')
                    setAnswerThreeFive('')

                    setQuestionFour('')
                    setQueryFour('')
                    setAnswerFourOne('')
                    setAnswerFourTwo('')
                    setAnswerFourThree('')
                    setAnswerFourFour('')
                    setAnswerFourFive('')

                    setQuestionFive('')
                    setQueryFive('')
                    setAnswerFiveOne('')
                    setAnswerFiveTwo('')
                    setAnswerFiveThree('')
                    setAnswerFiveFour('')
                    setAnswerFiveFive('')
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function show_reading_table() {
        const reading_table = readingTableCont.current
        const reading_add = readingAddCont.current

        fetch(`https://gramamrsone.herokuapp.com/test/?type_name=Read&level_name=A1`, {
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("OK");
                response.json().then((data) => {
                    console.log(data)
                    setReadingData(data)
                })
            } else if(response.status === 401){
                navigate("/admin");
            }
        })
            .catch((error) => {
                console.error("Error:", error);
            });

        reading_table.style.display = "flex";
        reading_add.style.display = "none";
    }

    function add_writing_handler() {
        fetch("https://gramamrsone.herokuapp.com/test", {
            method: "Post",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
            body: JSON.stringify({
                type_name: 'Write',
                level_name: testLvl,
                name_task: writingName,
                text: writingText,
                answer: [{
                    question: questionOne,
                    query_answer: queryOne,
                    answer_1: answerOneOne,
                    answer_2: answerOneTwo,
                    answer_3: answerOneThree,
                    answer_4: answerOneFour,
                    answer_5: answerOneFive,
                },
                    {
                        question: questionTwo,
                        query_answer: queryTwo,
                        answer_1: answerTwoOne,
                        answer_2: answerTwoTwo,
                        answer_3: answerTwoThree,
                        answer_4: answerTwoFour,
                        answer_5: answerTwoFive,
                    },
                    {
                        question: questionThree,
                        query_answer: queryThree,
                        answer_1: answerThreeOne,
                        answer_2: answerThreeTwo,
                        answer_3: answerThreeThree,
                        answer_4: answerThreeFour,
                        answer_5: answerThreeFive,
                    },
                    {
                        question: questionFour,
                        query_answer: queryFour,
                        answer_1: answerFourOne,
                        answer_2: answerFourTwo,
                        answer_3: answerFourThree,
                        answer_4: answerFourFour,
                        answer_5: answerFourFive,
                    },
                    {
                        question: questionFive,
                        query_answer: queryFive,
                        answer_1: answerFiveOne,
                        answer_2: answerFiveTwo,
                        answer_3: answerFiveThree,
                        answer_4: answerFiveFour,
                        answer_5: answerFiveFive,
                    },
                ]
            }),
        })
            .then((response) => {
                if (response.status === 201) {
                    console.log("OK");
                    setTestLvl('')
                    setWritingName('')
                    setWritingText('')
                    setQuestionOne('')
                    setQueryOne('')
                    setAnswerOneOne('')
                    setAnswerOneTwo('')
                    setAnswerOneThree('')
                    setAnswerOneFour('')
                    setAnswerOneFive('')

                    setQuestionTwo('')
                    setQueryTwo('')
                    setAnswerTwoOne('')
                    setAnswerTwoTwo('')
                    setAnswerTwoThree('')
                    setAnswerTwoFour('')
                    setAnswerTwoFive('')

                    setQuestionThree('')
                    setQueryThree('')
                    setAnswerThreeOne('')
                    setAnswerThreeTwo('')
                    setAnswerThreeThree('')
                    setAnswerThreeFour('')
                    setAnswerThreeFive('')

                    setQuestionFour('')
                    setQueryFour('')
                    setAnswerFourOne('')
                    setAnswerFourTwo('')
                    setAnswerFourThree('')
                    setAnswerFourFour('')
                    setAnswerFourFive('')

                    setQuestionFive('')
                    setQueryFive('')
                    setAnswerFiveOne('')
                    setAnswerFiveTwo('')
                    setAnswerFiveThree('')
                    setAnswerFiveFour('')
                    setAnswerFiveFive('')
                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    function delete_test_handler(id) {
        fetch(`https://gramamrsone.herokuapp.com/test/${id}`, {
            method: "Delete",
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            }
        })
            .then((response) => {
                if (response.status === 200) {

                } else if (response.status === 401) {
                    console.log("request has not been completed");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
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

        fetch(`https://gramamrsone.herokuapp.com/test/?type_name=Write&level_name=A1`, {
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("OK");
                response.json().then((data) => {
                    console.log(data)
                    setWritingData(data)
                })
            } else if(response.status === 401){
                navigate("/admin");
            }
        })
            .catch((error) => {
                console.error("Error:", error);
            });


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
        const materials_table = materialsTableCont.current
        const materials_add = materialsAddCont.current

        materials_add.style.display = "flex";
        materials_table.style.display = "none";
    }

    function show_materials_table() {
        const materials_table = materialsTableCont.current
        const materials_add = materialsAddCont.current

        fetch(`https://gramamrsone.herokuapp.com/material`, {
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("OK");
                response.json().then((data) => {
                    console.log(data)
                    setMaterialData(data)
                })
            }
        })
            .catch((error) => {
                console.error("Error:", error);
            });

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
        // const users_add = usersAddCont.current

        // users_add.style.display = "flex";
        users_table.style.display = "none";
    }

    function show_users_table() {
        const users_table = usersTableCont.current
        // const users_add = usersAddCont.current
        fetch(`https://gramamrsone.herokuapp.com/user`, {
            headers: {
                'accept': "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "token": sessionStorage.getItem('adminToken')
            },
        }).then((response) => {
            if (response.status === 200) {
                console.log("OK");
                response.json().then((data) => {
                    console.log(data)
                    setUserData(data)
                })
            }
        })
            .catch((error) => {
                console.error("Error:", error);
            });
        users_table.style.display = "flex";
        // users_add.style.display = "none";

    }

    return (
        <div>
            <NavBar/>

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
                            {translateData.map((item, i) => {
                                return <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name_task}</td>
                                    <td>{item.type_name.toString()}</td>
                                    <td>{item.level_name}</td>
                                    <div className={"users-delete"}
                                         onClick={() => delete_test_handler(item._id)}>Delete
                                    </div>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div ref={translateAddCont} className={"translate-add-cont"}>
                        <form className={"translate-form"}>
                            <lable>Test Lvl</lable>
                            <input className={"translate-name"} value={testLvl}
                                   onChange={(e) => setTestLvl(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Name</lable>
                            <input className={"translate-name"} value={translateName}
                                   onChange={(e) => setTranslateName(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea value={translateText} onChange={(e) => setTranslateText(e.target.value)}
                                      className={"translate-textarea"}/>
                            <br/>
                            <div className={"translate-question-form"}>
                                <lable>Question 1</lable>
                                <input value={questionOne} onChange={(e) => setQuestionOne(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryOne} onChange={(e) => setQueryOne(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerOneOne} onChange={(e) => setAnswerOneOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneTwo} onChange={(e) => setAnswerOneTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneThree} onChange={(e) => setAnswerOneThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFour} onChange={(e) => setAnswerOneFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFive} onChange={(e) => setAnswerOneFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 2</lable>
                                <input value={questionTwo} onChange={(e) => setQuestionTwo(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryTwo} onChange={(e) => setQueryTwo(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerTwoOne} onChange={(e) => setAnswerTwoOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoTwo} onChange={(e) => setAnswerTwoTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoThree} onChange={(e) => setAnswerTwoThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFour} onChange={(e) => setAnswerTwoFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFive} onChange={(e) => setAnswerTwoFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 3</lable>
                                <input value={questionThree} onChange={(e) => setQuestionThree(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryThree} onChange={(e) => setQueryThree(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerThreeOne} onChange={(e) => setAnswerThreeOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeTwo} onChange={(e) => setAnswerThreeTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeThree} onChange={(e) => setAnswerThreeThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFour} onChange={(e) => setAnswerThreeFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFive} onChange={(e) => setAnswerThreeFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"translate-question-form"}>
                                <lable>Question 4</lable>
                                <input value={questionFour} onChange={(e) => setQuestionFour(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFour} onChange={(e) => setQueryFour(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFourOne} onChange={(e) => setAnswerFourOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourTwo} onChange={(e) => setAnswerFourTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourThree} onChange={(e) => setAnswerFourThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFour} onChange={(e) => setAnswerFourFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFive} onChange={(e) => setAnswerFourFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"rtranslate-question-form"}>
                                <lable>Question 5</lable>
                                <input value={questionFive} onChange={(e) => setQuestionFive(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFive} onChange={(e) => setQueryFive(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFiveOne} onChange={(e) => setAnswerFiveOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveTwo} onChange={(e) => setAnswerFiveTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveThree} onChange={(e) => setAnswerFiveThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFour} onChange={(e) => setAnswerFiveFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFive} onChange={(e) => setAnswerFiveFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} onClick={() => add_translate_handler()}
                                   className={"translate-submit-btn"} type={"button"}/>
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
                            {readingData.map((item, i) => {
                                return <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name_task}</td>
                                    <td>{item.type_name.toString()}</td>
                                    <td>{item.level_name}</td>
                                    <div className={"users-delete"}
                                         onClick={() => delete_test_handler(item._id)}>Delete
                                    </div>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div ref={readingAddCont} className={"reading-add-cont"}>
                        <form className={"reading-form"}>
                            <lable>Test Lvl</lable>
                            <input className={"reading-name"} value={testLvl}
                                   onChange={(e) => setTestLvl(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Name</lable>
                            <input className={"reading-name"} value={readingName}
                                   onChange={(e) => setReadingName(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea value={readingText} onChange={(e) => setReadingText(e.target.value)}
                                      className={"reading-textarea"}/>
                            <br/>
                            <div className={"reading-question-form"}>
                                <lable>Question 1</lable>
                                <input value={questionOne} onChange={(e) => setQuestionOne(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryOne} onChange={(e) => setQueryOne(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerOneOne} onChange={(e) => setAnswerOneOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneTwo} onChange={(e) => setAnswerOneTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneThree} onChange={(e) => setAnswerOneThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFour} onChange={(e) => setAnswerOneFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFive} onChange={(e) => setAnswerOneFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 2</lable>
                                <input value={questionTwo} onChange={(e) => setQuestionTwo(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryTwo} onChange={(e) => setQueryTwo(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerTwoOne} onChange={(e) => setAnswerTwoOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoTwo} onChange={(e) => setAnswerTwoTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoThree} onChange={(e) => setAnswerTwoThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFour} onChange={(e) => setAnswerTwoFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFive} onChange={(e) => setAnswerTwoFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 3</lable>
                                <input value={questionThree} onChange={(e) => setQuestionThree(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryThree} onChange={(e) => setQueryThree(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerThreeOne} onChange={(e) => setAnswerThreeOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeTwo} onChange={(e) => setAnswerThreeTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeThree} onChange={(e) => setAnswerThreeThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFour} onChange={(e) => setAnswerThreeFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFive} onChange={(e) => setAnswerThreeFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 4</lable>
                                <input value={questionFour} onChange={(e) => setQuestionFour(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFour} onChange={(e) => setQueryFour(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFourOne} onChange={(e) => setAnswerFourOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourTwo} onChange={(e) => setAnswerFourTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourThree} onChange={(e) => setAnswerFourThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFour} onChange={(e) => setAnswerFourFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFive} onChange={(e) => setAnswerFourFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"reading-question-form"}>
                                <lable>Question 5</lable>
                                <input value={questionFive} onChange={(e) => setQuestionFive(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFive} onChange={(e) => setQueryFive(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFiveOne} onChange={(e) => setAnswerFiveOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveTwo} onChange={(e) => setAnswerFiveTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveThree} onChange={(e) => setAnswerFiveThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFour} onChange={(e) => setAnswerFiveFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFive} onChange={(e) => setAnswerFiveFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} onClick={() => add_reading_handler()}
                                   className={"writing-submit-btn"} type={"button"}/>
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
                                {writingData.map((item, i) => {
                                    return <tr>
                                        <td>{item._id}</td>
                                        <td>{item.name_task}</td>
                                        <td>{item.type_name.toString()}</td>
                                        <td>{item.level_name}</td>
                                        <div className={"users-delete"}
                                             onClick={() => delete_test_handler(item._id)}>Delete
                                        </div>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div ref={writingAddCont} className={"writing-add-cont"}>
                        <form className={"writing-form"}>
                            <lable>Test Lvl</lable>
                            <input className={"writing-name"} value={testLvl}
                                   onChange={(e) => setTestLvl(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Name</lable>
                            <input className={"writing-name"} value={writingName}
                                   onChange={(e) => setWritingName(e.target.value)} type={"text"}/>
                            <br/>
                            <lable>Test Text</lable>
                            <textarea value={writingText} onChange={(e) => setWritingText(e.target.value)}
                                      className={"writing-textarea"}/>
                            <br/>
                            <div className={"writing-question-form"}>
                                <lable>Question 1</lable>
                                <input value={questionOne} onChange={(e) => setQuestionOne(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryOne} onChange={(e) => setQueryOne(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerOneOne} onChange={(e) => setAnswerOneOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneTwo} onChange={(e) => setAnswerOneTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneThree} onChange={(e) => setAnswerOneThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFour} onChange={(e) => setAnswerOneFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerOneFive} onChange={(e) => setAnswerOneFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 2</lable>
                                <input value={questionTwo} onChange={(e) => setQuestionTwo(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryTwo} onChange={(e) => setQueryTwo(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerTwoOne} onChange={(e) => setAnswerTwoOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoTwo} onChange={(e) => setAnswerTwoTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoThree} onChange={(e) => setAnswerTwoThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFour} onChange={(e) => setAnswerTwoFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerTwoFive} onChange={(e) => setAnswerTwoFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 3</lable>
                                <input value={questionThree} onChange={(e) => setQuestionThree(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryThree} onChange={(e) => setQueryThree(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerThreeOne} onChange={(e) => setAnswerThreeOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeTwo} onChange={(e) => setAnswerThreeTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeThree} onChange={(e) => setAnswerThreeThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFour} onChange={(e) => setAnswerThreeFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerThreeFive} onChange={(e) => setAnswerThreeFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 4</lable>
                                <input value={questionFour} onChange={(e) => setQuestionFour(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFour} onChange={(e) => setQueryFour(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFourOne} onChange={(e) => setAnswerFourOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourTwo} onChange={(e) => setAnswerFourTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourThree} onChange={(e) => setAnswerFourThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFour} onChange={(e) => setAnswerFourFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFourFive} onChange={(e) => setAnswerFourFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <div className={"writing-question-form"}>
                                <lable>Question 5</lable>
                                <input value={questionFive} onChange={(e) => setQuestionFive(e.target.value)}
                                       className={"writing-question"} type={"text"}/>
                                <lable>Query Answer</lable>
                                <input value={queryFive} onChange={(e) => setQueryFive(e.target.value)}
                                       className={"writing-query"} type={"text"}/>
                                <lable>Answers</lable>
                                <input value={answerFiveOne} onChange={(e) => setAnswerFiveOne(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveTwo} onChange={(e) => setAnswerFiveTwo(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveThree} onChange={(e) => setAnswerFiveThree(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFour} onChange={(e) => setAnswerFiveFour(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                                <input value={answerFiveFive} onChange={(e) => setAnswerFiveFive(e.target.value)}
                                       className={"writing-answer"} type={"text"}/>
                            </div>
                            <input value={"Submit"} onClick={() => add_writing_handler()}
                                   className={"writing-submit-btn"} type={"button"}/>
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
                                <th>Material is video</th>
                                <th>Material Link</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            {materialData.map((item, i) => {
                                return <tr>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.type.toString()}</td>
                                    <td>{item.link}</td>
                                    <div className={"users-delete"}
                                         onClick={() => delete_material_handler(item._id)}>Delete
                                    </div>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div ref={materialsAddCont} className={"materials-add-cont"}>
                        <form className={"materials-form"}>
                            <lable>Name</lable>
                            <input className={"materials-name"} type={"text"} value={materialName}
                                   onChange={(e) => setMaterialName(e.target.value)}/>
                            <br/>
                            <lable>Link</lable>
                            <input className={"materials-name"} type={"text"} value={materialLink}
                                   onChange={(e) => setMaterialLink(e.target.value)}/>
                            <br/>
                            <lable>is Video?</lable>
                            <input className={"materials-name"} type={"checkbox"} checked={materialIsVideo}
                                   onChange={() => setMaterialIsVideo(!materialIsVideo)}/>
                            <br/>
                            <input value={"Submit"} onClick={() => add_material_handler()}
                                   className={"materials-submit-btn"} type={"button"}/>
                        </form>
                    </div>
                </div>

                <div ref={admUsersCont} className={"users-cont"}>
                    <div className={"users-top-btn"}>
                        <div onClick={show_users_table} ref={usersTableTopBtn} className={"top-btn"}>Table</div>
                        {/*<div onClick={show_users_add} ref={usersAddTopBtn} className={"top-btn"}>Add</div>*/}
                    </div>
                    <div ref={usersTableCont} className={"users-table-cont"}>
                        <table className={"users-table"}>
                            <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Login</th>
                                <th>User Email</th>
                                <th>Delete Btn</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userData.map((item, i) => {
                                return <tr>
                                    <td>{item._id}</td>
                                    <td>{item.login}</td>
                                    <td>{item.email}</td>
                                    <div className={"users-delete"}>Delete</div>
                                </tr>
                            })}

                            </tbody>
                        </table>
                    </div>
                    {/*<div ref={usersAddCont} className={"users-add-cont"}>*/}
                    {/*    <form className={"users-form"}>*/}
                    {/*        <lable>Name</lable>*/}
                    {/*        <input className={"users-name"} type={"text"}/>*/}
                    {/*        <br/>*/}
                    {/*        <lable>Email</lable>*/}
                    {/*        <input className={"users-name"} type={"text"}/>*/}
                    {/*        <br/>*/}
                    {/*        <lable>Password</lable>*/}
                    {/*        <input className={"users-name"} type={"text"}/>*/}
                    {/*        <br/>*/}
                    {/*        <input value={"Submit"} className={"users-submit-btn"} type={"button"}/>*/}
                    {/*    </form>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    );
}

export default Admin;