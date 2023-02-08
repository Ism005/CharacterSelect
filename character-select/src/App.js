import React, {} from 'react';
import './App.css';
import './index.css';
import './component/Header/layout.js';
import Layout from './component/Header/layout';
import Footer from './component/Footer/footer';
import Body from '../src/component/Body/body';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Character from './component/Chars/character.js';
import Controls from './component/Body/controls';
import System from './component/Body/System';
import Fightcade from './component/Body/fightcade';
import Register from './component/Body/register';
import Login from './component/Body/login';
import Detail from './component/Chars/Detail';

//const basedURL = 'http://localhost:7000/users';

function App() {


    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/' element={<Body />} />
                    <Route path='/character' element={<Character />} />
                    <Route path='/character/:id' element={<Detail />} />
                    <Route path='/controls' element={<Controls />} />
                    <Route path='/system' element={<System />} />
                    <Route path='/fightcade' element={<Fightcade />} />
                </Routes>
            </Layout>
            <Footer />
        </BrowserRouter>
    );

}


export default App;