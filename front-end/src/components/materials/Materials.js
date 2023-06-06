import React, { useState, useEffect } from "react";
import './Materials.css';
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function Materials() {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        fetch('https://gramamrsone.herokuapp.com/material')
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
            <NavBar/>

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
