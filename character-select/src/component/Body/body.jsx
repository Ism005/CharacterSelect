import React, {useEffect, useState} from 'react';
import makotoportrait from "../../img/makotoart.png";
import "./body.css";
import axios from "axios";
import Slider from "./Carrousels/slider";
import charsCard from "../Chars/charsCard";
import CharsCard from "../Chars/charsCard";

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
                <CharsCard/>
            </section>
            <section className="part2">
            </section>
        </div>
    );
};
export default Body;