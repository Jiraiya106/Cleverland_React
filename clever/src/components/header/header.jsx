import React from 'react';

// import './header.css';
import Logo from './assets/logo.svg'

import style from './header.module.css'

export class Header extends React.Component {
    render() {
        return (
            <div className={style.header}> 
            <img src={Logo} alt="" className={style.logo}/>
            HEADER </div>
        )
    }
};