import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/signin'>Iniciar Sesión</NavLink></li>
            <li><NavLink to='/signup'>Registrarse</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;