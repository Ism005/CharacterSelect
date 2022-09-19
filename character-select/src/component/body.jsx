import React, {useEffect, useState} from 'react';
import makotowalk from "../img/makotowalk.gif";
import makotoportrait from "../img/makotoart.png";
import "./body.css";
import axios from "axios";
import game1 from "../img/game1.jpeg";
import game2 from "../img/game2.jpeg";
import game3 from "../img/game3.png";
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';
import List from './List';
const basedURL = "http://localhost:7000/users";


const Body = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        test();
    }, [])

    useEffect(() => console.log(users))

    const test = async () => {
        await axios.get(basedURL)
            .then((res) => setUsers(res.data))
    }

    return (
        <div className="corps">
            <section className="part1">
                <div className="center">
                    <p className="text">
                        Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                        impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                        quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre
                        spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
                    </p>
                    <div>
                        
                    </div>
                    <img className="centerimage" src={makotoportrait}/>
                </div>
            </section>

            <div className="slide-container">
                <ul className="icones">
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={game1}/></a>
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={game2}/></a>
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={game3}/></a>
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={makotowalk}/></a>
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={makotowalk}/></a>
                    <li className="carrousel-item"></li>
                    <a href="#"><img className="pics" src={makotowalk}/></a>
                </ul>
            </div>
        </div>
    );
};

export default Body;