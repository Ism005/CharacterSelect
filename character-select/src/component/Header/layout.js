import React from 'react';
import logo from "../../logo.svg.png";
import yunbanner from "../../img/yunbanner.jpeg";
import "../body.css";
import {Link} from "react-router-dom";


const Layout = ({children}) =>{
    return (
        <div className="head">
           <nav className="crumbs">
               <div className="container">
               <Link  className="nav-item" to="/"><img src={logo}/></Link>
               <Link  className="nav-item"  to="/">Home</Link>
               <Link  className="nav-item" to="/character">Personnages</Link>
               <Link  className="nav-item" to="/controls">Contrôles</Link>
               <Link  className="nav-item"  to="/system">Système</Link>
               <Link  className="nav-item" to="/fightcade">Fightcade</Link>
               </div>
           </nav>
            <img className="logo" src={yunbanner}/>
            {children}
        </div>
    );
};

export default Layout;