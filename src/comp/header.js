import React from 'react';
import {NavLink} from "react-router-dom";


function Header(props) {
    return (
        <>
            <NavLink className='btn btn-success m-lg-2' to='/'>App</NavLink>
            <NavLink className='btn btn-danger m-lg-2' to='/home'>Home</NavLink>
            <NavLink className='btn btn-primary m-lg-2' to='/main'>Main</NavLink>
            <NavLink className='btn btn-secondary m-lg-2' to='/fil'>Fil</NavLink>
        </>
    );
}

export default Header;