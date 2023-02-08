import React from 'react';
import yunbanner from "../../img/yunbanner.jpeg";
import sfbanner from '../../img/ending_sf3.png';
import "../Body/body.css";
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <div className="head">
            <nav className="crumbs">
                <div className="container">
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/character">Personnages</Link>
                    <Link className="nav-item" to="/controls">Contrôles</Link>
                    <Link className="nav-item" to="/system">Système</Link>
                    <Link className="nav-item" to="/fightcade">Fightcade</Link>
                </div>
            </nav>
            <img className="logo" src={sfbanner} alt={""}/>
            {children}
        </div>
    );
};

export default Layout;