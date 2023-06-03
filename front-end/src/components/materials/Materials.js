import React, { useState, useEffect } from "react";
import './Materials.css';
import { NavLink } from "react-router-dom";

function Materials() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetch('https://grandmen.herokuapp.com/material')
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((data) => {
                        setMaterials(data)
                    })
                }
            })
    }, []);

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
                {materials.map((material,i) => (
                    <a href={material.link} className={"material_card"} key={material._id}>
                        <h3 className={"material_name"}>{material.name}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Materials;
