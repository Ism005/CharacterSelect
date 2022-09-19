import React, { useState } from 'react';
import axios from 'axios';
const champcURL = 'http://localhost:7000/champ/create';
const champURL  = 'http://localhost:7000/champ';

const System = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [champ, setChamp] = useState(null);


     const createChamp = async () => {
        await axios.post(champcURL, {name, description})
        .then(( res ) => {
            setChamp(res.data)
            console.log(res.data.description);
        })

        /*await axios.get(champURL)
            .then((res) => console.log(res.data))*/
    }


    return (
        <div className="container">
            <form name="RegForm" id="inscription">
                <p>CHARACTER SELECT</p>
                <input  type="text" name="username" id="username" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/><br/>
                <input className='descr' type="text" name="username" id="username" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}}/><br/>
                <input className='descr' type="text" name="username" id="username" placeholder="Test" onChange={(e) =>{alert(e.target.value)}}/><br/>
                <input type="button" value="CREATE" onClick={() => createChamp()}/>
            </form>
            
            <h1>
              {champ && champ.name + " " + champ.description}
            </h1>
            
        </div>
    );
}


export default System;