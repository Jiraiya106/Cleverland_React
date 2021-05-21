import React from 'react';

import logo from './assets/logo.svg'

import style from './card.module.css'

export class Card extends React.Component {
    render() {
        return (
            <div className={style.card}> 
                <h4>Карточка товара</h4>
                <h5>{this.props.title}</h5>
                <img src={logo} alt='товар'></img>
            </div>
        )
    }
};