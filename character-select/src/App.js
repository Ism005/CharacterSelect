import React, {useEffect, useState} from 'react';
import './App.css';
import './index.css';
import "./component/Header/layout.js"
import Layout from "./component/Header/layout";
import Footer from "./component/footer";
import Body from "./component/body";
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Character from "./component/Header/character.js";
import Controls from "./component/Body/controls";
import System from "./component/Body/System";
import Fightcade from "./component/Body/fightcade";
import axios from 'axios';
const basedURL = 'http://localhost:7000/users';

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path="/" element={<Body/>}/>
                  <Route path="/character" element={<Character/>}/>
                  <Route path="/controls" element={<Controls/>}/>
                  <Route path="/system" element={<System/>}/>
                  <Route path="/fightcade" element={<Fightcade/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  );

}




export default App;